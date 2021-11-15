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


app.use(express.urlencoded({ extended: false }));


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
//new
app.get('/budget/new', (req, res) => {
    console.log(req.timeStamp.toLocaleDateString())
    res.render('new.ejs');
});


//create
app.post('/budget', (req, res) => {
    // we need to add an id to req.body to satisfy the id property requirement
    req.body.id = budget.length + 1;
    // we need to cast the 'on' value to a boolean

    req.body.readyToEat = !!req.body.readyToEat

    budget.push(req.body);

    res.redirect('/budget') 



// show route
app.get('/budget/:id', (req, res) => {
    const newBudget = fruits.find(function(fruit) {
        return fruit.id === Number(req.params.id)
    });

    res.render('show.ejs', {
       foundFruit
    });
});





// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(` My Budget : ${port}`)
});
