const mongoose = require('mongoose')

const chatSchema = mongoose.Schema(
    {
       Sender:{
        Name: String,
        Id : String,
       },
       Recever:{
        Name: String,
        Id: String,
       },
       Messages:[
        {
            UserName:String,
            UserId:String,
            Message:String,
            Time:String
        }
       ]
    }
)

const personalchat = mongoose.model('chat', chatSchema)

module.exports = personalchat