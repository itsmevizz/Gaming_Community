const { response, json } = require("express");
const asyncHandler = require("express-async-handler");
const { base } = require("../models/userModel");
const user = require("../models/userModel");
const community = require("../models/communityModel");
const personalchat = require("../models/personalChatModel");
const generateToken = require("../utils/genarateToken");
var jwt = require("jsonwebtoken");
const { serve } = require("swagger-ui-express");
const ObjectId = require('mongoose').Types.ObjectId; 

module.exports = {
  registerUser: asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    const userExists = await user.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User Already Exists");
    }
    const User = await user.create({
      name,
      email,
      password,
    });
    if (User) {
      res.status(200);
      res.send("Account is Activated");
      // .json({
      //   _id: User._id,
      //   name: User.name,
      //   email: User.email,
      //   token: generateToken(User._id)
      // })
    } else {
      res.status(400);
      throw new Error("Error...!");
    }
  }),

  userInfo: asyncHandler(async (req, res) => {
    const token = req.headers["token"];
    const { id } = jwt.decode(token);
    const User = await user.findById(id);
    res.json({
      _id: User._id,
      name: User.name,
    });
  }),

  authUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const User = await user.findOne({ email });
    const checkStatus = () => {
      if (User.status) {
        return true;
      } else {
        throw new Error("Blocked User");
      }
    };

    if (User && checkStatus() && (await User.matchPassword(password))) {
      res.json({
        _id: User._id,
        name: User.name,
        token: generateToken(User._id),
      });
      // console.log({ token: generateToken(User._id) });
    } else {
      // throw new Error('Invalid Email or Password...!')
      return res.status(404).json({ message: "Invalid Email or Password...!" });
    }
  }),

  getUserData: asyncHandler(async (req, res) => {
    const users = await user.find({ user });
    res.json(users);
  }),
  blockUser: asyncHandler(async (req, res) => {
    console.log(req.body);
    const { _id } = req.body;
    const User = await user.findOne({ _id }).catch(() => {
      throw new Error("User Not found");
    });
    await User.updateOne({
      $set: { status: false },
    });
    res.json({ User });
  }),
  unBlockUser: asyncHandler(async (req, res) => {
    console.log(req.body);
    const { _id } = req.body;
    const User = await user.findOne({ _id }).catch(() => {
      throw new Error("User Not found");
    });
    await User.updateOne({
      $set: { status: true },
    });
    res.json({ User });
  }),
  addUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await user.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User Exists");
    }
    const User = await user
      .create({
        name,
        email,
        password,
      })
      .then(({ _id, name, email, status }) => {
        res.status(200).json({
          _id: _id,
          name: name,
          email: email,
          status: status,
          token: generateToken(_id),
        });
      });
    // if (User) {

    // } else {
    //   res.status(400)
    //   throw new Error('Error...!')
    // }
  }),

  createCommunity: asyncHandler(async (req, res) => {
    const authHeader = req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const data = {
      ...req.body,
      ...{ CreaterId: id },
    };
    console.log(id);

    const User = await user.findById(id);
    if (User) {
      const userData = { UserName: User.name, UserId: id };
      console.log(userData);
      await community.create(data).then(({_id}) => {
        community.updateOne(
          { _id: _id },
          { $push: { Members: userData } },
          (err, data) => {
            if (err) {
              console.log("Error happnd");
              res.send("Error");
            } else {
              console.log(data);
              res.send("Success");
            }
          }
        );
      });
    }
  }),

  allCommunities: asyncHandler(async (req, res) => {
    const communities = await community.find({ community }).catch(() => {
      res.send("500 Error");
    });
    res.json(communities);
  }),

  storeMessage: asyncHandler(async (req, res) => {
    const id = req.query.id;
    const message = req.body;
    console.log(message);
    community.updateOne(
      { _id: id },
      { $push: { Messeges: message } },
      (err, data) => {
        if (err) {
          res.send("Errorrr");
        } else {
          res.json({
            Ok: "Success",
          });
        }
      }
    );
  }),

  communityMessages: asyncHandler(async (req, res) => {
    const id = req.query.id;
    const data = await community.findById(id);
    res.json({ Messages: data.Messeges, CommunityName: data.Name });
  }),

  joinCommunity: asyncHandler(async (req, res) => {
    const id = req.query.id;
    const data = req.body;
    console.log(data, id);
    community.updateOne(
      { _id: id },
      { $push: { Members: data.userData } },
      (err, data) => {
        if (err) {
          console.log("Error happnd");
          throw new Error("Error");
        } else {
          console.log(data);
          res.send("Success");
        }
      }
    );
  }),

  followUser: asyncHandler(async (req, res) => {
    console.log("Follow", req.body);
    const authHeader = req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const { name, _id } = await user.findById(id);
    const data = {
      UserName: name,
      uid: _id,
    };
    const followerData = {
      UserName: req.body.userName,
      uid: req.body.id,
    };
    console.log(data);
    user
      .updateOne({ _id: followerData.uid }, { $push: { Followers: data } })
      .then((data) => {
        user.updateOne(
          { _id: _id },
          { $push: { Following: followerData } },
          (err, data) => {
            if (err) {
              throw new Error("Somthing Error");
            } else {
              res.send("Success");
            }
          }
        );
      })
      .catch(() => {
        console.log("Error");
      });
  }),

  unFollow: asyncHandler(async (req, res) => {
    console.log("UnFollow", req.body);
    const authHeader = req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const { _id } = req.body;
    await user
      .updateOne({ _id: id }, { $pull: { Following: { uid: _id } } })
      .then(() => {
        user.updateOne(
          { _id: _id },
          { $pull: { Followers: { uid: id } } },
          (err, data) => {
            if (err) {
              console.log("Error");
              throw new Error("Somthing Error");
            } else {
              console.log("Unfollow Success");
              res.send("Success");
            }
          }
        );
      })
      .catch(() => {
        throw new Error("Somthing Error");
      });
  }),
  friends: asyncHandler(async (req, res) => {
    const authHeader =await req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const Following = await user.findById(id).select({ Following: 1 });
    res.json(Following);
  }),

  personalChat: asyncHandler(async (req, res) => {
    const authHeader = req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const {Sender, Recever, Messages} = req.body

   
    const sender =await user.findById(id).select({ChatId:1})
    const recever = await user.findById(Recever.Id).select({ChatId:1})
    // const message = await personalchat.findById((sender.ChatId))
    const [filteredChannelId] =await sender.ChatId.filter(value => recever.ChatId.includes(value));
    console.log(filteredChannelId," Channel Id");
    // const message = await personalchat.findOne({$and:[{_id:sender.ChatId, _id:recever.ChatId}]})
    if (filteredChannelId) {
      await personalchat.updateOne({_id:filteredChannelId},{$push:{Messages:Messages}}).then(()=>{
        res.send("Success")
      }).catch(()=>{
        res.send("Errorrr")
      })
    }else{
      personalchat
        .create(req.body)
        .then(async({_id}) => {
          await user.updateOne({_id:Sender.Id},{$push:{ChatId:_id}})
          await user.updateOne({_id:Recever.Id},{$push:{ChatId:_id}})
          res.send({Ok: "Success"});
        })
        .catch(() => {
          console.log("Error");
        });
    }
  }),
  getPersolanChat: asyncHandler(async(req,res)=>{
    const authHeader = req.headers["token"];
    const { id } = jwt.decode(authHeader);
    const _id = req.query.id
    const user1 = await user.findById(_id).select({ChatId:1})
    const user2 = await user.findById(id).select({ChatId:1})
    const [filteredChannelId] =await user1.ChatId.filter(value => user2.ChatId.includes(value));
    console.log(filteredChannelId);
    if (filteredChannelId) {
      const message = await personalchat.findById(filteredChannelId).catch(()=>{
        console.log("Error");
      })
      if (message) {
        res.send(message)
      }else{
        res.send("")
        console.log("Empty"); 
      }
    }else{console.log("Empty channel id"),res.send("")}
  })
};
