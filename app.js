const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

// app.set('views','/views');
hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static("public"));
app.set("view engine", "hbs");


app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});