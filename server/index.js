const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

const playerList = []

app.use(cors());

const server = http.createServer(app);

var currentPlayer = -1;
let currentRoll = 0;

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

    socket.on("updateGameStart",() =>{
        currentPlayer++;
        for(player of playerList){
            if(player.num === currentPlayer){
                io.emit('nextTurn', player.id);
            }
        }
        io.emit("started")
    })

    socket.on("endTurn", () => {
        if(currentPlayer === playerList.length-1){
            currentPlayer = 0;
            for(player of playerList){
                if(player.num === currentPlayer){
                    io.emit('nextTurn', player.id);
                }
            }
            return;
        }
        currentPlayer++;
        for(player of playerList){
            if(player.num === currentPlayer){
                io.emit('nextTurn', player.id);
            }
        }
    })

    socket.on("rolling",() => {
        dice1=Math.floor((Math.random()*6)+1);
        dice2=Math.floor((Math.random()*6)+1);
        currentRoll=dice1+dice2;
        for(player of playerList){
            if(player.num === currentPlayer){
                if (39<player.position+currentRoll){
                    player.position=player.position+currentRoll-40
                    if(player.position===0){
                        player.money+=300
                    }
                    else{player.money+=200}
                }
                else{
                    player.position=player.position+currentRoll
                }
            }
        }
        
        io.emit("updatePlayers", playerList);
        io.emit("rolled",currentRoll);
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});