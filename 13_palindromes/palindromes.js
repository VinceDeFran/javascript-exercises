const palindromes = function (str) {
  // Convert string to an array of characters
  let arr = str.split('');

  // Remove spaces, punctuation, and make all letters lowercase
  arr = arr
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '') // Keep only letters and numbers
    .toLowerCase()
    .split('');

  // If empty, it's not a palindrome by default 
  if (arr.length === 0) return false;

  // Make a copy and reverse it
  const reversed = [...arr].reverse();

  // Compare the two arrays
  // (join them as strings to compare, or loop through elements)
  return arr.join('') === reversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
