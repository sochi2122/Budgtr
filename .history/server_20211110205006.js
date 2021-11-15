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

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/budget', (req, res) => {
  res.send(bakedGoods);
});

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.send(bakedGoods[req.params.id]);
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
