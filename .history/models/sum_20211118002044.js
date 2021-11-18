const budget = require("./budget.js");

      
   
     
   let sum = 0;
  for (let i = 0; i < budget.length; i++) {
    sum += budget[i].amount;
}


console.log(`Current Balance: ${sum}`);



module.exports = sum