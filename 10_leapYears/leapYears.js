//let Year = 700;
const leapYears = function(number) {

/*
    function isDiv4(number) 
    {
        return number % 4 === 0;
    }

    function isDiv100(number) 
    {
        return number % 100 === 0;
    }
    function isDiv400(number) 
    {
        return number % 400 === 0;
    }
*/
    if ( (number % 4 === 0) && !( (number % 100 === 0) && !(number % 400 === 0) )  )
    {
        return true;
    } else {
        return false;
    }
};
//console.log(isDiv4(Year));
//console.log(isDiv100(Year));
//console.log(isDiv400(Year));
//console.log(leapYears(Year));

// Do not edit below this line
module.exports = leapYears;
