const budget = require("../models/budget");

// var val = budget.reduce(function(sum, amount){
//     return {
//   amount: sum.amount + amount.amounts
  
//   }
//   });
//   console.log(val);
  

// const totalBal = sum(let i = 0; i < budget.amount.length; i++)

//   console.log(totalBal)




  var budget = document.getElementsByTagName("input");
var total = 0;

for (var i = 0; i < budget.length; i++){
    if (budget[i].type = "text"){
        total += parseInt(budget[i].value, 10);
    }
}

alert(total);