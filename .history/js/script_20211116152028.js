const budget = require("../models/budget");

module.import { budget.number } from "/models/budget.js";

const arrSum = budget => budget.amount.reduce((a,b) => a + b, 0))
return(arrSum)


    let accountArr = []
    let totalBal = i.getElementById('div').innerHTML;
    for (let i = 0; i < budget.length; i++) {
      accountArr.push(Number(budget.amount))
      totalBal += (Number(budget.amount))
  return totalBal