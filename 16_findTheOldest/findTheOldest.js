const findTheOldest = function(people) {
  // No people? Return null 
  if (!people || people.length === 0) {
    return null;
  }

  // Helper function: calculate age in years
  function getAge(person) {
    const currentYear = new Date().getFullYear();
    const deathYear = person.yearOfDeath || currentYear;
    return deathYear - person.yearOfBirth;
  }

  // Sort the array by age, oldest first
  const sorted = [...people].sort((a, b) => getAge(b) - getAge(a));

  // Return the first object (oldest)
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
