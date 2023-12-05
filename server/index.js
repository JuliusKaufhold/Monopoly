const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

const playerList = []

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) =>{
    io.emit("updatePlayers", playerList);

    socket.on("send_message", (data) =>{
        playerList.push(data)
        io.emit("updatePlayers", playerList);
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});