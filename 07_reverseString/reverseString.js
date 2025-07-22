const reverseString = function(str) {

  // Convert string to array
  const arr = str.split('');

  // Reverse the array
  const reversedArr = arr.reverse();

  // Convert array back to string
  const reversedStr = reversedArr.join('');

  // Return the reversed string
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
