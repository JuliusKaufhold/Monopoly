const express = require("express");
const app = express();
const http = require ("http");
const { Server } = require("socket.io");
const cors = require("cors");

const playerList = []
const globalProperties=[
    {id:1,name:"Badstraße",cost:60,housePrice:50,defaultRent:2,oneHouseRent:10,twoHouseRent:30,threeHouseRent:90,fourHouseRent:160,hotelRent:250,housesOnProperty:0,owner:-1,streetID:1,isMortaged:false},
    {id:3,name:"Turmstraße",cost:60,housePrice:50,defaultRent:4,oneHouseRent:20,twoHouseRent:60,threeHouseRent:180,fourHouseRent:320,hotelRent:450,housesOnProperty:0,owner:-1,streetID:1,isMortaged:false},
    {id:5,name:"Süd-Bahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:6,name:"Chaussee-straße",cost:100,housePrice:50,defaultRent:6,oneHouseRent:30,twoHouseRent:90,threeHouseRent:270,fourHouseRent:400,hotelRent:550,housesOnProperty:0,owner:-1,streetID:2,isMortaged:false},
    {id:8,name:"Elisenstraße",cost:100,housePrice:50,defaultRent:6,oneHouseRent:30,twoHouseRent:90,threeHouseRent:270,fourHouseRent:400,hotelRent:550,housesOnProperty:0,owner:-1,streetID:2,isMortaged:false},
    {id:9,name:"Poststraße",cost:120,housePrice:50,defaultRent:8,oneHouseRent:40,twoHouseRent:100,threeHouseRent:300,fourHouseRent:450,hotelRent:600,housesOnProperty:0,owner:-1,streetID:2,isMortaged:false},
    {id:11,name:"Seestraße",cost:140,housePrice:100,defaultRent:10,oneHouseRent:50,twoHouseRent:150,threeHouseRent:450,fourHouseRent:625,hotelRent:750,housesOnProperty:0,owner:-1,streetID:3,isMortaged:false},
    {id:12,name:"Elektrizizätswerk",cost:150,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:13,name:"Hafenstraße",cost:140,housePrice:100,defaultRent:10,oneHouseRent:50,twoHouseRent:150,threeHouseRent:450,fourHouseRent:625,hotelRent:750,housesOnProperty:0,owner:-1,streetID:3,isMortaged:false},
    {id:14,name:"Neue Straße",cost:160,housePrice:100,defaultRent:12,oneHouseRent:60,twoHouseRent:180,threeHouseRent:500,fourHouseRent:700,hotelRent:900,housesOnProperty:0,owner:-1,streetID:3,isMortaged:false},
    {id:15,name:"Westbahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:16,name:"Münchner Straße",cost:180,housePrice:100,defaultRent:14,oneHouseRent:70,twoHouseRent:200,threeHouseRent:550,fourHouseRent:750,hotelRent:950,housesOnProperty:0,owner:-1,streetID:4,isMortaged:false},
    {id:18,name:"Wiener Straße",cost:180,housePrice:100,defaultRent:14,oneHouseRent:70,twoHouseRent:200,threeHouseRent:550,fourHouseRent:750,hotelRent:950,housesOnProperty:0,owner:-1,streetID:4,isMortaged:false},
    {id:19,name:"Berliner Straße",cost:200,housePrice:100,defaultRent:16,oneHouseRent:80,twoHouseRent:220,threeHouseRent:600,fourHouseRent:800,hotelRent:1000,housesOnProperty:0,owner:-1,streetID:4,isMortaged:false},
    {id:21,name:"Theater-Straße",cost:220,housePrice:150,defaultRent:18,oneHouseRent:90,twoHouseRent:250,threeHouseRent:700,fourHouseRent:875,hotelRent:1050,housesOnProperty:0,owner:-1,streetID:5,isMortaged:false},
    {id:23,name:"Museum-Straße",cost:220,housePrice:150,defaultRent:18,oneHouseRent:90,twoHouseRent:250,threeHouseRent:700,fourHouseRent:875,hotelRent:1050,housesOnProperty:0,owner:-1,streetID:5,isMortaged:false},
    {id:24,name:"Opernplatz",cost:240,housePrice:150,defaultRent:20,oneHouseRent:100,twoHouseRent:300,threeHouseRent:750,fourHouseRent:925,hotelRent:1100,housesOnProperty:0,owner:-1,streetID:5,isMortaged:false},
    {id:25,name:"Nord-Bahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:26,name:"Lessing-straße",cost:260,housePrice:150,defaultRent:22,oneHouseRent:110,twoHouseRent:330,threeHouseRent:800,fourHouseRent:975,hotelRent:1150,housesOnProperty:0,owner:-1,streetID:6,isMortaged:false},
    {id:27,name:"Schiller-straße",cost:260,housePrice:150,defaultRent:22,oneHouseRent:110,twoHouseRent:330,threeHouseRent:800,fourHouseRent:975,hotelRent:1150,housesOnProperty:0,owner:-1,streetID:6,isMortaged:false},
    {id:28,name:"Wasserwerk",cost:150,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:29,name:"Goethe-straße",cost:280,housePrice:150,defaultRent:24,oneHouseRent:120,twoHouseRent:360,threeHouseRent:850,fourHouseRent:1025,hotelRent:1200,housesOnProperty:0,owner:-1,streetID:6,isMortaged:false},
    {id:31,name:"Rathausplatz",cost:300,housePrice:200,defaultRent:26,oneHouseRent:130,twoHouseRent:390,threeHouseRent:900,fourHouseRent:1100,hotelRent:1275,housesOnProperty:0,owner:-1,streetID:7,isMortaged:false},
    {id:32,name:"Hauptstraße",cost:300,housePrice:200,defaultRent:26,oneHouseRent:130,twoHouseRent:390,threeHouseRent:900,fourHouseRent:1100,hotelRent:1275,housesOnProperty:0,owner:-1,streetID:7,isMortaged:false},
    {id:34,name:"Bahnhofstraße",cost:320,housePrice:200,defaultRent:28,oneHouseRent:150,twoHouseRent:450,threeHouseRent:1000,fourHouseRent:1200,hotelRent:1400,housesOnProperty:0,owner:-1,streetID:7,isMortaged:false},
    {id:35,name:"Hauptbahnhof",cost:200,defaultRent:25,oneOtherRent:50,twoOtherRent:100,threeOtherRent:200,othersOwned:0,owner:-1,streetID:-1,isMortaged:false},
    {id:37,name:"Parkstraße",cost:350,housePrice:200,defaultRent:35,oneHouseRent:175,twoHouseRent:500,threeHouseRent:1100,fourHouseRent:1300,hotelRent:1500,housesOnProperty:0,owner:-1,streetID:8,isMortaged:false},
    {id:39,name:"Schlossallee",cost:400,housePrice:200,defaultRent:50,oneHouseRent:200,twoHouseRent:600,threeHouseRent:1400,fourHouseRent:1700,hotelRent:2000,housesOnProperty:0,owner:-1,streetID:8,isMortaged:false},
]

app.use(cors());

const server = http.createServer(app);

var currentPlayer = -1;
let currentRoll = 0;
let paschCount=0;
let streetNum=-2;
let canBuy=false;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
})

function updateOthersOwned(){
    playerList.map(player => {
        let counter=-1
        let company=-1
        player.ownedProps.map(prop => {
            if(prop===5||prop===15||prop===25||prop===35){
                counter++;
            }
            if(prop===12 || prop===28){
                company++;
            }
        })
        globalProperties.map(prop => {
            if(prop.owner===player.id &&(prop.id===5||prop.id===15||prop.id===25||prop.id===35)){
                prop.othersOwned=counter
            }
            if(prop.owner===player.id &&(prop.id===12||prop.id===28)){
                prop.othersOwned=company
            }
        })
    })
}

io.on("connection", (socket) =>{
    
    socket.on("login", (data) =>{
        if (playerList.length<=5){
            playerList.push({id:socket.id ,num: playerList.length,name: data, money:1500, position:0 ,ownedProps: [],isBankrupt:false});
        }
        io.emit("updatePlayers", playerList, globalProperties);
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
        playerList.map(player => {
            if(player.num===currentPlayer){
                if(player.isBankrupt===true){
                    return;
                }
            }
        })
        paschCount=0
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
        /* (Math.random()*6)+1 */
        dice1=Math.floor(1);
        dice2=Math.floor(0);
        currentRoll=dice1+dice2;
        if(dice1===dice2){
            paschCount++
        }
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

                globalProperties.map(property => {
                    if(property.id===player.position){
                        if(player.money>=property.cost && property.owner===-1){
                            canBuy=true
                        }
                        if(property.owner!=player.id && property.owner!=-1){
                            let rent;
                            updateOthersOwned()
                            if(property.id===12 || property.id===28){
                                switch(property.othersOwned){
                                    case 0: 
                                        player.money-=currentRoll*4
                                        rent=currentRoll*4
                                        break;
                                    case 1:
                                        player.money-= currentRoll*10
                                        rent=currentRoll*10
                                        break;
                                    default: break;
                                }
                            }

                            if(property.id===5 || property.id===15 || property.id===25 || property.id===35){
                                switch(property.othersOwned){
                                    case 0:
                                        player.money-=property.defaultRent
                                        rent=property.defaultRent
                                        break;

                                    case 1:
                                        player.money-=property.oneOtherRent
                                        rent=property.oneOtherRent
                                        break;

                                    case 2:
                                        player.money-=property.twoOtherRent
                                        rent=property.twoOtherRent
                                        break;

                                    case 3:
                                        player.money-=property.threeOtherRent
                                        rent=property.threeOtherRent
                                        break;
                                    default: break;
                                }
                            }
                            else{
                                
                                switch(property.housesOnProperty){
                                    case 0:
                                        player.money-=property.defaultRent
                                        rent=property.defaultRent
                                        break;
                                    case 1:
                                        player.money-=property.oneHouseRent
                                        rent=property.oneHouseRent
                                        break;
                                    case 2:
                                        player.money-=property.twoHouseRent
                                        rent=property.twoHouseRent
                                        break;
                                    case 3:
                                        player.money-=property.threeHouseRent
                                        rent=property.threeHouseRent
                                        break;
                                    case 4:
                                        player.money-=property.fourHouseRent
                                        rent=property.fourHouseRent
                                        break;
                                    case 5:
                                        player.money-=property.hotelRent
                                        rent=property.hotelRent
                                        break;
                                    default: break;
                                }
                            }
                            if(player.money<0){
                                player.isBankrupt=true
                            }
                            playerList.map(player => {
                                if(player.id===property.owner){
                                    player.money+=rent
                                }
                            })
                        }
                    }
                }) 
                io.emit("OpportunityBuyProperty",canBuy,player.id)
            }
        }
        canBuy=false
        io.emit("updatePlayers", playerList, globalProperties);
        io.emit("rolled",currentRoll,dice1,dice2,paschCount);
    })

    socket.on("syncPlayerList" ,() => {
        io.emit("clientSyncList")
    })

    socket.on("BuyProperty", () => {
        
        for(player of playerList){
            if(player.num===currentPlayer){
                globalProperties.map(property => {
                    if(property.id===player.position){
                        property.owner=player.id
                        player.money-=property.cost
                        streetNum=property.streetID
                        player.ownedProps.push(property.id)
                    }
                })    

                let street = globalProperties.filter((property) => {
                    return property.streetID===streetNum;
                })

                const allEqual = street => street.every(prop => prop.owner===player.id)

                if(allEqual(street)===true){
                    globalProperties.map(property => {
                        if(property.streetID===streetNum){property.defaultRent*=2}
                    })
                }
                streetNum=-2
                io.emit("updatePlayers", playerList, globalProperties)
            }
        }
    })

    socket.on("BuyHouse", (propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt) => {
        if(HousesAlreadyBuilt===5){return;}
        let playermoney;
        playerList.map(player => {
        if(ObjectOwner===player.id){
            playermoney=player.money
        }
        })
        if(playermoney<priceHouse){return;}
        globalProperties.map(property => {
            if(property.id===propertyID){
                property.housesOnProperty++;
                playerList.map(player => {
                if(ObjectOwner===player.id){
                    player.money-=priceHouse
                }
                })
            }
        })
        io.emit("updatePlayers", playerList, globalProperties) 
    })

    socket.on("SellHouse", (propertyID,ObjectOwner,priceHouse,HousesAlreadyBuilt) => {
        if(HousesAlreadyBuilt===0){return;}
        globalProperties.map(property => {
            if(property.id===propertyID){
                property.housesOnProperty--;
                playerList.map(player => {
                if(ObjectOwner===player.id){
                    player.money+=priceHouse/2
                    if(player.money>0){
                        player.isBankrupt=false
                    }
                }
                })
            }
        })
        io.emit("updatePlayers", playerList, globalProperties) 
    })

    socket.on("MortageProperty",(propertyID,propertyHouses,propertyOwner) => {
        if(propertyHouses!==0){
            return;
        }
        globalProperties.map(property => {
            if(property.id===propertyID){
                property.isMortaged=true
                playerList.map(player => {
                    if(player.id===propertyOwner){
                        player.money+=property.cost/2
                    }
                })
            }
        })
        io.emit("updatePlayers", playerList, globalProperties)
    })

    socket.on("BuyBackProperty",(propertyID,propertyOwner) => {
        playerList.map(player => {
            if(player.id===propertyOwner){
                globalProperties.map(property => {
                    if(property.id===propertyID){
                        if(player.money<property.cost/2+5){
                            return;
                        }
                        property.isMortaged=false
                        player.money-=property.cost/2+5
                    }
                })
            }
        })
        io.emit("updatePlayers",playerList,globalProperties)
    })

})

server.listen(3001, () => {
    console.log("SERVER IS RUNNING");
});

/* TODO:
even build
event felder
bankrupt button
mortages
delete properties
auctions
trades
board design
event log
chat
*/