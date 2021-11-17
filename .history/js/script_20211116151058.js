const budget = require("../models/budget");




const arrSum = budget => budget.amount.reduce((a,b) => a + b, 0)
