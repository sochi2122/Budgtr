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


<img src="${budget.amount">
<p>Name: ${profile.results[0].name.first + " " + profile.results[0].name.last}</p>

<p>Sex: ${profile.results[0].gender}</p>
<p>Age: ${profile.results[0].dob.age}</p>
<p>User Name: ${profile.results[0].login.username}</p>
<p>Email: ${profile.results[0].email}</p>
<p>Location: ${ profile.results[0].location.city + " " + profile.results[0].location.state}</p>
<p>Phone: ${ profile.results[0].cell}</p>


</div>


<br>