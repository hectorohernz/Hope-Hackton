const express = require('express');
const app = express();
require('dotenv').config();

let apiKey = process.env.APIKEY;
//let url = `https://api.tomtom.com/search/2/search/pizza.json?key=${apiKey}&lat=${lat}&lon=-${long}`
app.set('views', "../views")
app.set('view engine', 'pug');
app.use(express.static('../public'));

app.get("/", (req,res) => {
    res.render('index')
}); 


const port = process.env.PORT || 3000;
app.listen (port, () => {
    console.log(`Server Is On http://localhost:${port}`);
});