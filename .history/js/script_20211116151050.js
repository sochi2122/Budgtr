const budget = require("../models/budget");




const arrSum = budget => budget.amounts.reduce((a,b) => a + b, 0)
