const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    console.log("sirviendo", path.join(__dirname , "views/index.html"));
    //res.send("Hello world");
    // res.sendFile(path.join(__dirname , "views/index.html"));
    res.render("index", 
        {
            title: "Mi primera pagina web"
        });
    //res.end();
});


router.get("/contacts", (req, res) => {
    res.render("contacts", 
        {
            title: "Mis contactos"
        });
    //res.end();
});

module.exports = router;