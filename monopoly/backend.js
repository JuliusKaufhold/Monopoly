import express from 'express'
const app = express();
import http from 'http'
const server = http.createServer(app);
import {Server} from "socket.io";
const io = new Server(server)


app.use(express.static("public"));

app.get('/', (req, res) => {   
  res.sendFile('C:/Users/juliu/Desktop/Monopoly/monopoly/src/index.html') 
})

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_username", (data) => {
    socket.emit("getOther_username", data);
  });
});

server.listen(5173, () => {
  console.log("SERVER IS RUNNING");
});