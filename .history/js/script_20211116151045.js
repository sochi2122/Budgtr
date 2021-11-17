const budget = require("../models/budget");




const arrSum = budget => budget.reduce((a,b) => a + b, 0)
