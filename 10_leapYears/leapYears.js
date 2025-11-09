const leapYears = function(year) {
    // return true for a leap year
    // years divisible by 4 = leap years
    // however, years divisible by 100 != leap years
    // unless they are divisible by 400
    if (year % 4 === 0) {
        if (year % 100 === 0 && year) 
        {
            if (year % 400 === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    }
    return false;
    // return false for non leap year

};

// Do not edit below this line
module.exports = leapYears;
