// Leap Year
/* function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    return false;

}
const isMyYearLeapYear = isLeapYear(1933);
console.log('My Year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her Year:', isHerYearLeapYear) */


// problem 06: JavaScript Leap Year Logic
// Example 1: Check Leap Year Using if...else
/* function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year, ' is a leap year');
    } else {
        console.log(year, ' is not a leap year');
    }
}

// take input
checkLeapYear(1900);
checkLeapYear(1952);
checkLeapYear(2000);
checkLeapYear(2012);
checkLeapYear(2020);
checkLeapYear(2100);
checkLeapYear(2134); */


// Example 2: Check Leap Year Using newDate()
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year, ' is a leap year');
    } else {
        console.log(year, ' is not a leap year');
    }
}

// take input
checkLeapYear(1900);
checkLeapYear(1952);
checkLeapYear(2000);
checkLeapYear(2012);
checkLeapYear(2020);
checkLeapYear(2100);
checkLeapYear(2134);
