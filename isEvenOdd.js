/* function isEven(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven); */

// problem 05: Check Two Numbers As Input. If Number is Even Then Print True And Number is Odd Then Print False. Input Number (98 & 117)
function checkOddEven(number) {
    const remainder = number % 2;
    if (remainder == 0) {
        return true;
    }
    return false;
}
const razibNumber = 98;
const razibInputNumber = checkOddEven(razibNumber);
console.log('Razib Input Number:', razibInputNumber);
const mamunNumber = 117;
const mamunInputNumber = checkOddEven(mamunNumber);
console.log('Mamun Input Number:', mamunInputNumber);