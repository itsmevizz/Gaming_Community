const mongoose = require("mongoose")

const communitySchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Topic:{
        type:String,
        required: true
    },
    Description:{
        type:String,
        required: true
    },
    CoverImage: {
        type: String,
    },
    CreaterId: {
        type: String,
        required: true
    },
    Members: [
        {
            UserName: {
                type: String,
                required: true
            },
            UserId: {
                type: String,
                required: true
            }
        }
    ],
    Messeges: [
        {
            User: {
                Name: String,
                uid: String,
            },
            Message: String,
            Time:String

        },  
    ]

})


const community = mongoose.model('community', communitySchema)

module.exports = community