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

// method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method')) // ?_method=DELETE

// This middleware reads form data from incoming requests that involve
// form submissions
// this middleware will create req.body -> this object represents the request body
// =======================================
//              ROUTES
// =======================================
// index route

app.get('/', (req, res) => {
    console.log("budget first")
    res.send(		` Go to <a href="/budget">localhost:3000/budget</a> to get started!`
    );
  });


  app.get('/budget', (req, res) => {
    res.render('index.ejs', { budget });
});


app.get('/budget/new', (req, res) => {
  console.log(req.timeStamp.toLocaleDateString())
  res.render('new.ejs');
});


app.get('/budget/:indexOfBudgetArray', (req, res) => {
  res.render('show.ejs', {
    
    foundBudget: budget[req.params.indexOfBudgetArray]
  })
});




//create
app.post('/budget', (req, res) => {
    // we need to add an id to req.body to satisfy the id property requirement
    req.body.id = budget.length + 1;
    // we need to cast the 'on' value to a boolean


    budget.push(req.body);

    res.redirect('/budget') 

  })

// show route




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log()})
