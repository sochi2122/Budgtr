const budget = require("../models/budget");
let numbers = budget

var numbers = 
var total = 0;
for (var i = 0; i < budget.amount.length; i++){
    if (budget.amount[i].type = "number"){
        total += parseInt(budget[i].value, 10);
    }
}

alert(total);