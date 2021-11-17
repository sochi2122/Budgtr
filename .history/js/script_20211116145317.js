const budget = require("../models/budget");

// var val = budget.reduce(function(sum, amount){
//     return {
//   amount: sum.amount + amount.amounts
  
//   }
//   });
//   console.log(val);
  

const totalBal = req.params.text;

var indexofBudgetArray = budget[for(let i = 0; i < budget.amount.length; i++)];

output = totalBal+ indexofBudgetArray;

  res.send(`<h1>  ${output}</h1>`)
})



<% for(let i = 0; i < budget.length; i++) { %>
