const calc = require("./calc");
const list = require("./input");

const result = calc.calculate(list.input());

console.log("Result:",result);
