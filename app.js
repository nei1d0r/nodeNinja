let express = require("express");
let bodyParser = require("body-parser")

let app = express(); // gives us acces to all the methods of express

let urlencodedParser = bodyParser.urlencoded({extended:false})

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/contact", function(req, res){
    res.render("contact",{qs: req.query});
});
app.post("/contact", urlencodedParser, function(req, res){
    console.log(req.body);
    res.render("contact-success",{data: req.body}); // no need to specify content typein express
});

app.get("/profile/:name",function(req,res){ // Dynamic response based on user id
    let data = {age:32,job:"Unknown", hobbies:["eating","fighting","sleeping"]};
    res.render("profile", {person: req.params.name, data: data}); // 1st arg sends to page in views, second specifies parameter
});

app.listen(3000); // port listener

