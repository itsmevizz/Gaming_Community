const { disconnect } = require('mongoose');
const { Server } = require('socket.io');

const io = require("socket.io")(3006, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000"
    },
})



io.on("connection", (socket) => {
    console.log("User COnnected");

    socket.on('setup', (communityId) => {
        socket.join(communityId)
        socket.emit("connected")
        console.log("User COnnected", communityId)
    })

    socket.on("JoinCommunity", (communityId) => {
        socket.join(communityId)
        console.warn("User Joinde community", communityId);
    })

    socket.on("NewMessage", (data) => {
        console.log(data,"\n New msg dataaaa0077");
        const info = data
        socket.in(data.channel).emit("messageReceived",info)
    })

    socket.on("JoinPersonalChat", (chatId) => {
        socket.join(chatId)
        console.warn("User Joinde PersonalChat", chatId);
    })
    
})
