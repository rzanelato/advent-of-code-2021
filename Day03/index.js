const input = require('./input');
const calc = require('./calc');

const data = input.get();

const part1Result = calc.calculateP1(data);
console.log("Result Part1:", part1Result);

const part2Result = calc.calculateP2(data);
console.log("Result Part2:", part2Result);