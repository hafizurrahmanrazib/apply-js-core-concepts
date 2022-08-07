function factorial(number) {
    let num = 1;
    let result = 1;
    while (num <= number) {
        result = result * num;
        num++;
    }
    return result;
}

const number = 9;
const inputNumber = factorial(number);
console.log('Factorial Of ' + number, inputNumber);