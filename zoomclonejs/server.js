const express = require("express");
const app = express();
const server= require("http").Server(app);
const io = require("socket.io")(server);
const {v4: uuidv4} = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

console.log(uuidv4());

app.get("/", (rep, res) => {
    let roomId = uuidv4();
    res.redirect(`/${roomId}`);
});

app.get("/:room", (rep, res) => {
    res.render("room", {
        roomId: req.params.room
    })
});

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) =>{
        console.log("roomid userid", roomId, userId);
    });
});

server.listen(3000);
