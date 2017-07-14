var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Mongoose schema setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});


var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Dzegužkalns",
//     image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
//     }, function(err, campground) {
//       if(err){
//         console.log(err);
//       } else {
//         console.log("New Campground:");
//         console.log("campground");
//       }
//     }
// );


var campgrounds = [{
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  },
  {
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  },
  {
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  },
  {
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  },
  {
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  },
  {
    name: "Čiekurkalns",
    image: "http://farm5.static.flickr.com/4074/4809693691_4950d00677.jpg"
  },
  {
    name: "Bastejkalns",
    image: "http://www.citariga.lv/images/vietas/bastejkalns_b.jpg"
  },
  {
    name: "Dzegužkalns",
    image: "http://photos.wikimapia.org/p/00/00/68/63/44_big.jpg"
  }
];


app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  //get all campgrounds from db
  Campground.find({}, function (err, allCampgrounds) {
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds})
    }
  })

});

app.post("/campgrounds", function(req, res) {
  //get data from form and add it to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  //create new campground and save it to db
  Campground.create(newCampground, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect to campgrounds page
      res.redirect("/campgrounds");
    }
  })

});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});




app.listen(3001, function() {
  console.log("The YelpCamp server is now being served by node.js")
});
