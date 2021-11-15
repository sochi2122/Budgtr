// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const budget = require('./models/budget.js');


app.use(express.static('public')); 

app.use(function(req, res, next) {
    console.log('I will run with each request');
    req.timeStamp = new Date();
    next();
});


// =======================================
//              ROUTES
// =======================================
// index route

app.get('/', (req, res) => {
    console.log("budget first")
    res.send(budget);
  });


app.get('/budget', (req, res) => {
  res.send(budget);
});


// show route
app.get('/budget/:index', (req, res) => {
  res.send(budget[req.params.id]);
});




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(` My Budget : ${port}`)
});
