/*
var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();
*/

var courses = [
    {
        id: 1,
        name: "java"
    },
    {
        id: 2,
        name: "javascript"
    },
    {
        id: 3,
        name: "c++"
    }
];
const express = require("express");
const app = express();

// para que se pueda parsear el json en el body de peticiones post
app.use(express.json());

app.get("/expressapp/courses", (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.send(JSON.stringify(courses));
    res.end();
});

app.get("/expressapp/course", (req, res) => {
    var id = req.query.id;
    var course = courses.find((item) => {return id == item.id;});
    res.setHeader("Content-type", "application/json");
    res.send(JSON.stringify(course));
    res.end();
});

app.post("/expressapp/course", (req, res) => {
    var id = courses.length + 1;
    //var name = req.params.;
    res.setHeader("Content-type", "application/json");
    var course = {id: id,
            name: req.body.name
        };
    courses.push(course);
    res.send(JSON.stringify(course));
    res.end();
});

app.listen(80, () => {
    console.log("Listening port 80");
});

