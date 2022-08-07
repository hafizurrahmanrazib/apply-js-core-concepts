// 1*2*3*4*5*6*7
/* function factorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}
const result = factorial(9);
console.log(result); */

// Problem-07: Factorial (Reverse Way Multiplication)
function getFactorial(number) {
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

const inputNumber = 9;
const factorialOfInputNumber = getFactorial(inputNumber);
console.log('Factorial:', factorialOfInputNumber);