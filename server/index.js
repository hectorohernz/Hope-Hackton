const express = require('express');
const app = express();
require('dotenv').config();
const request = require('request');

let apiKey = process.env.APIKEY;
app.set('views', "../views")
app.set('view engine', 'pug');
app.use(express.static('../public'));

app.get("/", (req,res) => {
    res.render('index')
}); 

app.get("/home", (req,res) => {
    res.render('home')
});

app.get("/feed",(req,res) => {
    res.render('feed')
}); 
app.get("/resources", (req,res) => {
    res.render("resources");
}); 
app.get('/resources/shelter', (req,res) => {
    let source = 'welfare';
    let lat = 40.752655;
    let lon = -73.977295;
    let url = `https://api.tomtom.com/search/2/search/${source}.json?key=${apiKey}&lat=40.752655&lon=-73.977295`;
    request(url, (error,response,body) => {
        if(error){
           console.log(url);
        } else{
            let info = JSON.parse(body);
            const results = info.results;
            res.send(results);
        }      
    });
});

const port = process.env.PORT || 3000;
app.listen (port, () => {
    console.log(`Server Is On http://localhost:${port}`);
});