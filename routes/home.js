const express = require("express");
const router = express.Router();


router
    .get("/", (req, res) => {
        console.log("home page");
        res.send("home page");
        //res.render("home", {})
    })
    .post("/post", (req, res) => {

    });

module.exports = router;