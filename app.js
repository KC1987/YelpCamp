var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"},
        {name: "Čiekurkalns", image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"},
        {name: "Bastejkalns", image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"},
        {name: "Dzegužkalns", image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"}
    ];


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and add it to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
        //redirect to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});




app.listen(3001, function(){
    console.log("The YelpCamp server is now being served by node.js")
});