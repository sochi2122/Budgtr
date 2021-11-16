const budget = require("../models/budget");

var val = budget.reduce(function(sum, amount){
    return {
  amount: sum.amount + amount.amounts
  
  }
  });
  console.log(val);
  


  var msgTotal = budge.reduce(function(prev, cur) {
    return prev + cur.msgCount;
  }, 0);
  
  console.log('Total Messages:', msgTotal);