const calc = require("./calc");
const list = require("./input");

const part1Result = calc.calculate(list.input());

console.log("Result Part1:",part1Result);

const part2Result = calc.calculateGroups(list.input());

console.log("Result Part2:",part2Result);

/* Test
const test = [199,200,208,210,200,207,240,269,260,263];
const testResult = calc.calculateGroups(test);
console.log("Result:", testResult);
*/