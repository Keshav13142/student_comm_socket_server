const { Server } = require("socket.io");
require('dotenv').config();

const io = new Server({
    cors: {
        origin: process.env.CORS_ORIGIN_URL,
        credentials: true,
    },
});

io.on("connect", (socket) => {
    console.log(`connected ${socket.id}`);
    socket.onAny((eventName, ...args) => {
        // args is an array of objects we'll only be needing the 1st element
        socket.emit(eventName, args[0]);
    });
});

io.listen(process.env.PORT || 5000);    