var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
    ];
    res.render("campgrounds", {campgrounds:campgrounds});
});


app.listen(3001, function(){
    console.log("The YelpCamp server is now being served by node.js")
});