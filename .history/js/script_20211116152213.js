const budget = require("../models/budget");

module.import { budget.number } from "/models/budget.js";




    let accountArr = []
    let totalBal = i.getElementById('div').innerHTML;
    for (let i = 0; i < budget.length; i++) {
      accountArr.push(Number(budget.amount))
      totalBal += (Number(budget.amount))
console.log(totalBal)