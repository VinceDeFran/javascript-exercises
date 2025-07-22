const add = function(a,b) {
	c = a+b;
  return c;
};

const subtract = function(a,b) {
	c = a-b;
  return c;	
};

const sum = function(numbers) {

  if (!Array.isArray(numbers)) return NaN;
  return numbers.reduce((total, num) => total + num, 0);
};

const multiply = function(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  let product = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
};
console.log(multiply())
const power = function(a,b) {
	c = a**b;
  return c;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
