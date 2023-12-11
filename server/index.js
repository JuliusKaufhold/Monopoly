const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

const playerList = []
const globalProperties=[
    {id:1,name:"Badstraße",cost:60,housePrice:50,defaultRent:2,oneHouseRent:10,twoHouseRent:30,threeHouseRent:90,fourHouseRent:160,hotelRent:250,housesOnProperty:0,owner:-1},
    {id:3,name:"Turmstraße",cost:60,housePrice:50,defaultRent:4,oneHouseRent:20,twoHouseRent:60,threeHouseRent:180,fourHouseRent:320,hotelRent:450,housesOnProperty:0,owner:-1},
    {id:5,name:"Süd-Bahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1},
    {id:6,name:"Chaussee-straße",cost:100,housePrice:50,defaultRent:6,oneHouseRent:30,twoHouseRent:90,threeHouseRent:270,fourHouseRent:400,hotelRent:550,housesOnProperty:0,owner:-1},
    {id:8,name:"Elisenstraße",cost:100,housePrice:50,defaultRent:6,oneHouseRent:30,twoHouseRent:90,threeHouseRent:270,fourHouseRent:400,hotelRent:550,housesOnProperty:0,owner:-1},
    {id:9,name:"Poststraße",cost:120,housePrice:50,defaultRent:8,oneHouseRent:40,twoHouseRent:100,threeHouseRent:300,fourHouseRent:450,hotelRent:600,housesOnProperty:0,owner:-1},
    {id:11,name:"Seestraße",cost:140,housePrice:100,defaultRent:10,oneHouseRent:50,twoHouseRent:150,threeHouseRent:450,fourHouseRent:625,hotelRent:750,housesOnProperty:0,owner:-1},
    {id:12,name:"Elektrizizätswerk",cost:150,othersOwned:0,owner:-1},
    {id:13,name:"Hafenstraße",cost:140,housePrice:100,defaultRent:10,oneHouseRent:50,twoHouseRent:150,threeHouseRent:450,fourHouseRent:625,hotelRent:750,housesOnProperty:0,owner:-1},
    {id:14,name:"Neue Straße",cost:160,housePrice:100,defaultRent:12,oneHouseRent:60,twoHouseRent:180,threeHouseRent:500,fourHouseRent:700,hotelRent:900,housesOnProperty:0,owner:-1},
    {id:15,name:"Westbahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1},
    {id:16,name:"Münchner Straße",cost:180,housePrice:100,defaultRent:14,oneHouseRent:70,twoHouseRent:200,threeHouseRent:550,fourHouseRent:750,hotelRent:950,housesOnProperty:0,owner:-1},
    {id:18,name:"Wiener Straße",cost:180,housePrice:100,defaultRent:14,oneHouseRent:70,twoHouseRent:200,threeHouseRent:550,fourHouseRent:750,hotelRent:950,housesOnProperty:0,owner:-1},
    {id:19,name:"Berliner Straße",cost:200,housePrice:100,defaultRent:16,oneHouseRent:80,twoHouseRent:220,threeHouseRent:600,fourHouseRent:800,hotelRent:1000,housesOnProperty:0,owner:-1},
    {id:21,name:"Theater-Straße",cost:220,housePrice:150,defaultRent:18,oneHouseRent:90,twoHouseRent:250,threeHouseRent:700,fourHouseRent:875,hotelRent:1050,housesOnProperty:0,owner:-1},
    {id:23,name:"Museum-Straße",cost:220,housePrice:150,defaultRent:18,oneHouseRent:90,twoHouseRent:250,threeHouseRent:700,fourHouseRent:875,hotelRent:1050,housesOnProperty:0,owner:-1},
    {id:24,name:"Opernplatz",cost:240,housePrice:150,defaultRent:20,oneHouseRent:100,twoHouseRent:300,threeHouseRent:750,fourHouseRent:925,hotelRent:1100,housesOnProperty:0,owner:-1},
    {id:25,name:"Nord-Bahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1},
    {id:26,name:"Lessing-straße",cost:260,housePrice:150,defaultRent:22,oneHouseRent:110,twoHouseRent:330,threeHouseRent:800,fourHouseRent:975,hotelRent:1150,housesOnProperty:0,owner:-1},
    {id:27,name:"Schiller-straße",cost:260,housePrice:150,defaultRent:22,oneHouseRent:110,twoHouseRent:330,threeHouseRent:800,fourHouseRent:975,hotelRent:1150,housesOnProperty:0,owner:-1},
    {id:28,name:"Wasserwerk",cost:150,othersOwned:0,owner:-1},
    {id:29,name:"Goethe-straße",cost:280,housePrice:150,defaultRent:24,oneHouseRent:120,twoHouseRent:360,threeHouseRent:850,fourHouseRent:1025,hotelRent:1200,housesOnProperty:0,owner:-1},
    {id:31,name:"Rathausplatz",cost:300,housePrice:200,defaultRent:26,oneHouseRent:130,twoHouseRent:390,threeHouseRent:900,fourHouseRent:1100,hotelRent:1275,housesOnProperty:0,owner:-1},
    {id:32,name:"Hauptstraße",cost:300,housePrice:200,defaultRent:26,oneHouseRent:130,twoHouseRent:390,threeHouseRent:900,fourHouseRent:1100,hotelRent:1275,housesOnProperty:0,owner:-1},
    {id:34,name:"Bahnhofstraße",cost:320,housePrice:200,defaultRent:28,oneHouseRent:150,twoHouseRent:450,threeHouseRent:1000,fourHouseRent:1200,hotelRent:1400,housesOnProperty:0,owner:-1},
    {id:35,name:"Hauptbahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1},
    {id:37,name:"Parkstraße",cost:350,housePrice:200,defaultRent:35,oneHouseRent:175,twoHouseRent:500,threeHouseRent:1100,fourHouseRent:1300,hotelRent:1500,housesOnProperty:0,owner:-1},
    {id:39,name:"Schlossallee",cost:400,housePrice:50,defaultRent:50,oneHouseRent:200,twoHouseRent:600,threeHouseRent:1400,fourHouseRent:1700,hotelRent:2000,housesOnProperty:0,owner:-1},
]

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
                io.emit('nextTurn', player.id)
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
        io.emit("rolled",currentRoll,dice1,dice2);
    })

    socket.on("syncPlayerList" ,() => {
        io.emit("clientSyncList", playerList)
    })
})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});