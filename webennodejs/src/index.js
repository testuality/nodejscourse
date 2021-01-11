const express = require("express");
const path = require("path");
const indexRouter = require(path.join(__dirname , "routes/index.js"));
const app = express();

// settings
app.set("port", 3000);
app.set("views", path.join(__dirname , "views"));
app.set("view engine", "ejs");

// middleware

// routes
app.use(indexRouter);



// listening
app.listen(app.get("port"), () => {
    console.log(`Server listening at port ${app.get("port")}....`);
});

