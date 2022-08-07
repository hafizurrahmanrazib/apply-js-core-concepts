function factorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}
const number = 9;
const fact = factorial(number);
console.log('Factorial Of ' + number, fact);