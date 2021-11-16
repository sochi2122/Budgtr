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
  // console.log('I will run with each request');
  req.timeStamp = new Date();
  next();
});

// method-override
const methodOverride = require('method-override')

app.use(methodOverride('_method')) // ?_method=DELETE


app.use(express.urlencoded({ extended: false }));




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



//create
app.post('/budget', (req, res) => {
  // we need to add an id to req.body to satisfy the id property requirement
  req.body.id = budget.length + 1;
  // we need to cast the 'on' value to a boolean


  budget.push(req.body);

  res.redirect('/budget') 

})

app.get('/budget/:indexOfBudgetArray', (req, res) => {
  res.render('show.ejs', {
    
    foundBudget: budget[req.params.indexOfBudgetArray]
  })
});






// show route
// Delete
app.delete('/budget/:indexOfBudgetArray', (req, res) => {
  budget.splice(req.params.indexOfBudgetArray)
  res.redirect('/budget')
})

// EDIT FORM
app.get('/budget/:indexOfBudgetArray/edit', (req,res) => {
  res.render('edit.ejs', {
    name: budget[req.params.indexOfBudgetArray],
    index: req.params.indexOfBudgetArray,
  });
})

// Put (update)
app.put('/budget/:indexOfBudgetArray', (req,res) => {
  console.log('put route', req.body)
  

  budget[req.params.indexOfBudgetArray] = req.body
  res.redirect('/budget')
})




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log()})
