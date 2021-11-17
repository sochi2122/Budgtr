const budget = require("../models/budget");

module.import {budget} from "/models/budget.js";




    let accountArr = []
    let totalBal = i.getElementById('div').innerHTML;
    for (let i = 0; i < budget.length; i++) {
      accountArr.push(Number(budget.amount))
      totalBal += (Number(budget.amount))
console.log(totalBal)





const $bank = $('bank');


$('#bank').click(function() {
  fetch(BASE_URL)
    .then(parseJSON)
    .then(newUser)
    function parseJSON(sep) {
      return sep.json();
    }
});
