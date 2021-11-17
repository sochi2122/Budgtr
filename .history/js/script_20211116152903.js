const budget = require("../models/budget");

module.import {budget} from "/models/budget.js";




    let accountArr = []
    let totalBal = i.getElementById('div').innerHTML;
    for (let i = 0; i < budget.length; i++) {
      accountArr.push(Number(budget.amount))
      totalBal += (Number(budget.amount))
console.log(totalBal)





const $bank = $('bank');


$('#bank').map(function() {
  fetch(budget)
    .then(parseJSON)
    .then(lineItem)
    function parseJSON(sep) {
      return sep.json();
    }
});


$main.html(`
      
<div class="flex-grid">
<div class="grid-item">


<p>"${budget.amount"></p>

</div>


<br>
`);

  return;
}



})
  