const sumAll = function(a, b) {
  // Return 'ERROR' for invalid inputs
  if (
    typeof a !== 'number' || 
    typeof b !== 'number' || 
    !Number.isInteger(a) || 
    !Number.isInteger(b) || 
    a < 0 || 
    b < 0
  ) {
    return 'ERROR';
  }

  // Determine min and max (order doesn't matter)
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let sum = 0;

  // Accumulate sum using a loop
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
