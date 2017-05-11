var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var methodOverride = require("method-override");
var LocalStrategy = require("passport-local");
var User = require("./models/user");

//javascript connections
var todos = require("./scripts/todos");

mongoose.connect("mongodb://localhost/time_tidy");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());



//Passport Configuration
app.use(require("express-session")({
    secret: "Time management is pretty fantastic",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/dashboard", function (req, res){
    res.render("dashboard");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Time Tidy has started");
});