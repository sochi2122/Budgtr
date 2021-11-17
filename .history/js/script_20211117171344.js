let accountArr = []
let totalBal = accountArr + i
for (let i = 0; i < budget.length; i++) {
  accountArr.push(Number(budget.amount))
  totalBal += (Number(budget.amount))
  console.log(totalBal)
}

import.models