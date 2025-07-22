const repeatString = function(string, number) {
    let newString = '';
    if (number < 0)
    {
        return 'ERROR';
    }
    else
    {
        for (let i = number; i > 0; i--)
        {
            newString = newString + string;
        }
    }
    return newString;
};
console.log(repeatString('La', 10))
// Do not edit below this line
module.exports = repeatString;
