const budget = require("../models/budget");

// var val = budget.reduce(function(sum, amount){
//     return {
//   amount: sum.amount + amount.amounts
  
//   }
//   });
//   console.log(val);
  

// const totalBal = sum(let i = 0; i < budget.amount.length; i++)

//   console.log(totalBal)



budget = document.getElementsByTagName("budget");


var total = 0;

for (var i = 0; i < budget.amount.length; i++){
    if (budget.amount[i].type = "number"){
        total += parseInt(budget[i].value, 10);
    }
}

alert(total);