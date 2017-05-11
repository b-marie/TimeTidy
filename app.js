var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var methodOverride = require("method-override");
var LocalStrategy = require("passport-local");
var User = require("./models/user");





mongoose.connect("mongodb://localhost/time_tidy");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/dashboard", function (req, res){
    res.render("dashboard");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Time Tidy has started");
});