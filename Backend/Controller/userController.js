const { response, json } = require('express');
const asyncHandler = require('express-async-handler');
const { base } = require('../models/userModel');
const user = require("../models/userModel");
const community = require('../models/communityModel')
const generateToken = require('../utils/genarateToken')
var jwt = require('jsonwebtoken');

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
      res.status(200)
      res.send("Account is Activated")
      // .json({
      //   _id: User._id,
      //   name: User.name,
      //   email: User.email,
      //   token: generateToken(User._id)
      // })
    } else {
      res.status(400)
      throw new Error('Error...!')
    }
  }),

  userInfo: asyncHandler(async (req, res) => {
    const token = req.headers['token']
    const { id } = jwt.decode(token)
    const User = await user.findOne({ id })
    console.log(User);
    res.json({
      _id: User._id,
      name: User.name,
    })

  }),

  authUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const User = await user.findOne({ email })
    const checkStatus = () => {
      if (User.status) {
        return true
      } else {
        throw new Error('Blocked User')
      }
    }

    if (User && checkStatus() && (await User.matchPassword(password))) {
      res.json({
        _id: User._id,
        name: User.name,
        token: generateToken(User._id)
      })
      // console.log({ token: generateToken(User._id) });
    } else {
      // throw new Error('Invalid Email or Password...!')
      return res.status(404).json({ message: 'Invalid Email or Password...!' })
    }

  }),

  getUserData: asyncHandler(async (req, res) => {
    const users = await user.find({ user })
    res.json({
      users
    })
  }),
  blockUser: asyncHandler(async (req, res) => {
    console.log(req.body);
    const { _id } = req.body
    const User = await user.findOne({ _id }).catch(() => { throw new Error('User Not found') })
    await User.updateOne({
      $set: { status: false }
    })
    res.json({ User })
  }),
  unBlockUser: asyncHandler(async (req, res) => {
    console.log(req.body);
    const { _id } = req.body
    const User = await user.findOne({ _id }).catch(() => { throw new Error('User Not found') })
    await User.updateOne({
      $set: { status: true }
    })
    res.json({ User })
  }),
  addUser: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await user.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User Exists");
    }
    const User = await user.create({
      name,
      email,
      password,
    }).then(({ _id, name, email, status }) => {
      res.status(200).json({
        _id: _id,
        name: name,
        email: email,
        status: status,
        token: generateToken(_id)
      })
    })
    // if (User) {

    // } else {
    //   res.status(400)
    //   throw new Error('Error...!')
    // }

  }),


  createCommunity: asyncHandler(async (req, res) => {

    console.log(req.body);

    await community.create(req.body).then((data) => {
      console.log(data);

    })


  }),

  allCommunities: asyncHandler(async (req, res) => {
    const communities = await community.find({ community })
    res.json({ communities })
  }),

  storeMessage: asyncHandler(async (req, res) => {
    const id = req.query.id
    const message = req.body

    community.updateOne(
      { _id: id },
      { $push: { Messeges: req.body } },
      (err, data) => {
        if (err) {
          res.send("Errorrr")
        } else {
          res.json({
            Ok: 'Success'
          })
        }
      }
    )

  }),

  communityMessages: asyncHandler(async (req, res) => {
    const id = req.query.id
    console.log(id);
    const data = await community.findById(id)
    res.json(data.Messeges)
    })


}

