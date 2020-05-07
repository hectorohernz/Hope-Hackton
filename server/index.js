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

app.get("/signinpage", (req,res) => {
    res.render('signinpage')
});

app.get("/feed",(req,res) => {
    res.render('feed')
}); 
app.get("/resources", (req,res) => {
    res.render("resources");
}); 

app.get("/resources/shelter", (req,res) => {
    res.render("shelter");
});

app.get("/resources/foodbanks", (req,res) => {
    res.render("food-banks");
});

app.get("/resources/mentalhealth", (req,res) => {
    res.render("mental");
});

app.get("/resources/clothes", (req,res) => {
    res.render("clothing");
});

app.get('/resources/api/shelter', (req,res) => {
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
app.get('/resources/api/foodbank', (req,res) => {
    let source = 'foodbank';
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
app.get('/resources/api/mentalhealth', (req,res) => {
    let source = 'mental-health';
    let lat = 40.752655;
    let lon = -73.977295;
    let url = `https://api.tomtom.com/search/2/search/${source}.json?key=${apiKey}&lat=40.752655&lon=-73.977295`;
    request(url, (error,response,body) => {
        if(error){
           res.render('404')
        } else{
            let info = JSON.parse(body);
            const results = info.results;
            res.send(results);
        }      
    });
});
app.get('/resources/api/clothes', (req,res) => {
    let source = 'clothing-donation';
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

app.get('*', function(req, res){
    res.render('404');
  });
const port = process.env.PORT || 3000;
app.listen (port, () => {
    console.log(`Server Is On http://localhost:${port}`);
});