const mongoose = require("mongoose")

const communitySchema = mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    CoverImage: {
        type: String,
        require: true
    },
    CreaterId: {
        UderId: String,
        require: true
    },
    Members: {
        users: [
            {
                Name: {
                    type: String,
                    require: true
                },
                UserId: {
                    id: String,
                    require: true
                },
                require: true
            },
        ],
        require: true
    },
    Messeges: [
        {
            userId: {
                type: String,
                require: true
            },
            Messege: {
                type: String,
                require: true
            },

            timestamps: true,
        }
    ]

})