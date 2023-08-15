const express       = require("express");
const ejs           = require("ejs");
const bodyParser    = require('body-parser');

const indexRouter = require("./routes/index");
const homeRouter = require("./routes/home");
const infoRouter = require("./routes/info");

const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));

app.use("/", indexRouter);
app.use("/home", homeRouter);
app.use("/info", infoRouter);



app.get('/problem/:num', function(req, res) {
    res.render("problem", {num : req.params.num });
})


app.post("/postTest", function(req, res) {
    console.log(req.body);
    res.json({
        ok : true,
        name : req.body.name, 
    });
})

app.listen(3000, function() {
    console.log("실행중...");
})
