/*


  <script type="text/javascript">
function calc(){
  const budget = require('./models/budget.js');
  let sum = 0;

  for (let i = 0; i < budget.length; i++) {
  sum += budget[i].amount;
  document.getElementById('sum').innerHTML = sum;
}}

</script>

<div id="sum"></div>
*/


// let accountArr = []
// let totalBal = accountArr + i
// for (let i = 0; i < budget.length; i++) {
//   accountArr.push(Number(budget.amount))
//   totalBal += (Number(budget.amount))
//   console.log(totalBal)
// }

 /*
var showArray = document.getElementById('result').innerHTML = sum;


function showArray(sum){

const budget = [
    
    {
        date: 'April 1',
        name: 'Income',
        from: 'Old Glory Insurance',
        amount: 1000,
        tags: ['income', 'yay'],
      },
      {
        date: 'April 1',
        name: 'Taxes',
        from: 'Government',
        amount: -300,
        tags: ['taxes'],
      },
      {
        date: 'April 1',
        name: 'Retirement',
        from: 'Country Bank',
        amount: -200,
        tags: ['retirement', 'investing in the future'],
      },
      {
        date: 'April 1',
        name: 'Savings',
        from: 'Country Bank',
        amount: -100,
        tags: ['savings', 'rainy day fund'],
      },
      {
        date: 'April 1',
        name: 'Credit Card Payment',
        from: 'NPM Express',
        amount: -100,
        tags: ['credit card'],
      },
      {
        date: 'April 5',
        name: 'Monthy Birthday Money from Aunt Tilda',
        from: 'Aunt Tilda',
        amount: 20,
        tags: ['Aunt Tilda is the best'],
      },
      {
        date: 'April 5',
        name: 'Coffee',
        from: 'Moon Coin',
        amount: -4,
        tags: ['coffee'],
      },
      {
        date: 'April 5',
        name: 'Internet',
        from: 'Horizon',
        amount: -100,
        tags: ['utilities'],
      },
      {
        date: 'April 3',
        name: 'Groceries',
        from: 'Merchant Jack\'s',
        amount: -76,
        tags: ['groceries'],
      },
      {
        date: 'April 3',
        name: 'Pet Food',
        from: 'Pet Precious Inc',
        amount: -7,
        tags: ['pets'],
      },
    ];
  

 let total = 0;
  for (let i = 0; i < budget.length; i++) {
    total += budget[i].amount;
  }


//console.log(sum($div.html))
  
}

*/






const mainEl = document.querySelectorAll('div');

mainEl.innerHTML = '<div>Sei Rocks!</div>'




    const budget = [
    
      {
          date: 'April 1',
          name: 'Income',
          from: 'Old Glory Insurance',
          amount: 1000,
          tags: ['income', 'yay'],
        },
        {
          date: 'April 1',
          name: 'Taxes',
          from: 'Government',
          amount: -300,
          tags: ['taxes'],
        },
        {
          date: 'April 1',
          name: 'Retirement',
          from: 'Country Bank',
          amount: -200,
          tags: ['retirement', 'investing in the future'],
        },
        {
          date: 'April 1',
          name: 'Savings',
          from: 'Country Bank',
          amount: -100,
          tags: ['savings', 'rainy day fund'],
        },
        {
          date: 'April 1',
          name: 'Credit Card Payment',
          from: 'NPM Express',
          amount: -100,
          tags: ['credit card'],
        },
        {
          date: 'April 5',
          name: 'Monthy Birthday Money from Aunt Tilda',
          from: 'Aunt Tilda',
          amount: 20,
          tags: ['Aunt Tilda is the best'],
        },
        {
          date: 'April 5',
          name: 'Coffee',
          from: 'Moon Coin',
          amount: -4,
          tags: ['coffee'],
        },
        {
          date: 'April 5',
          name: 'Internet',
          from: 'Horizon',
          amount: -100,
          tags: ['utilities'],
        },
        {
          date: 'April 3',
          name: 'Groceries',
          from: 'Merchant Jack\'s',
          amount: -76,
          tags: ['groceries'],
        },
        {
          date: 'April 3',
          name: 'Pet Food',
          from: 'Pet Precious Inc',
          amount: -7,
          tags: ['pets'],
        },
      ];
  
 
      let sum = 0;

      for (let i = 0; i < budget.length; i++) {
        sum += budget[i].amount;
    }
 
console.log(sum)    //console.log(sum(document.getElementById('result').textContent))
    
console.log(`Current Balance: ${sum}`);







module.exports = sum, mainEl;
