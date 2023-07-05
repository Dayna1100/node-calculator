const Calculator = require('./Calculator');

const calc = new Calculator();

const sum = calc.add(15, 4);
console.log(sum); // Output: 19

const difference = calc.subtract(15, 4);
console.log(difference); // Output: 11

const product = calc.multiply(15, 4);
console.log(product); // Output: 60

const quotient = calc.divide(15, 4);
console.log(quotient); // Output: 3.75

const circleArea = calc.findAreaOfCircle(3.75);
console.log(circleArea); // Output: 44.178646691106465

const rectangleArea = calc.findAreaOfRectangle(6, 23);
console.log(rectangleArea); // Output: 138