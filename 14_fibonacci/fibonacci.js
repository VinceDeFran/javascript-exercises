const fibonacci = function(index) {
  // Convert input to a number (handles strings of numbers)
  // Returns NaN for any non-numeric value
  const parsedIndex = Number(index);

  // Check for valid integer (parsedIndex must be an integer or zero)
  if (typeof parsedIndex !== 'number' || !Number.isInteger(parsedIndex)) {
    return "OOPS";
  }

  // Check for negative input
  if (parsedIndex < 0) {
    return "OOPS";
  }

  // Handle the base cases quickly
  if (parsedIndex === 0) {
    return 0;
  } else if (parsedIndex === 1 || parsedIndex === 2) {
    return 1;
  }

  // Handle extreme results
  if (parsedIndex > 75) {
    return "You're hurting my head!";
  } 

  // Generate Fibonacci up to the target index (optimized for medium/large indices)
  let a = 1, b = 1, current;
  for (let i = 3; i <= parsedIndex; i++) {
    current = a + b;
    a = b;
    b = current;
  }

  return b;

};

// Do not edit below this line
module.exports = fibonacci;
