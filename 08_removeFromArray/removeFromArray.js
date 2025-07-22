const removeFromArray = function(arr, ...args) {
  // Deduplicate and collect unique values to remove (ignore repeated args)
  const valuesToRemove = new Set(args);
  // Filter out elements that exactly match any value in valuesToRemove
  return arr.filter(item => !valuesToRemove.has(item));
};

// Do not edit below this line
module.exports = removeFromArray;
