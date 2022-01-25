const calc = require('./calc');
const input = require('./input');

const data = input.get();

const part1Result = calc.calculate(data);
console.log("Result Part1:", part1Result);

const part2Result = calc.calculateAlternative(data);
console.log("Result Part2:", part2Result);
