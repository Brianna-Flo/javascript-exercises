const leapYears = function(year) {
    const yearDivisibleByFour = year % 4 === 0;
    const yearDivisibleByHundred = year % 100 === 0;
    const yearDivisibleByFourhundred = year % 400 === 0;
    if (yearDivisibleByFour && !yearDivisibleByHundred) {
        return true;
    } 
    if (yearDivisibleByHundred && yearDivisibleByFourhundred) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
