const budget = require("../models/budget");

// var val = budget.reduce(function(sum, amount){
//     return {
//   amount: sum.amount + amount.amounts
  
//   }
//   });
//   console.log(val);
  

const words = req.params.text;

var indexofMagicArray = magic[Math.floor(Math.random()*magic.length)];

output = words + " " + indexofMagicArray;

  res.send(`<h1>  ${output}</h1>`)
})
