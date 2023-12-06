const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

const playerList = []

app.use(cors());

const server = http.createServer(app);

let currentPlayer = 0;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) =>{
    io.emit("updatePlayers", playerList);

    socket.on("login", (data) =>{
        if (playerList.length<=5){
            playerList.push({id:socket.id ,num: playerList.length,name: data, money:1500, position:0});
        }
        io.emit("updatePlayers", playerList);
    })

    socket.on('endTurn', () => {
        if(currentPlayer === playerList.length){
            currentPlayer = 0;
            return;
        }

        for(player in playerList){
            if(player.num === currentPlayer){
                currentPlayer++;
                socket.emit('nextTurn', player.id);
            }
        }
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});