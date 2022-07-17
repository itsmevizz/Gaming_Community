module.exports = {
    message: (socket) => {
        socket.on('join_room',(data)=>{
            socket.join(data)
        })

        socket.on("send_message", (data) => {
            // socket.broadcast.emit("receive_message", data)
            socket.to(data.room).emit("receive_message",data)
        })
    }
}