
var express = require("express");
var routes = require("./routes/routes");

var app = express();

var port = process.env.port || 8080;

app.set("view engine", "ejs");

app.use(express.static(__dirname+"/public"));

app.listen(port, function () {
    console.log('<=== app listening on port: '+port);   
});

app.get("/", routes.home);

app.get("/:city", routes.city);