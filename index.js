const express = require("express");
const app = express();

app.use(express.static( __dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/*", function(req, res){
    res.redirect("home");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Running");
});