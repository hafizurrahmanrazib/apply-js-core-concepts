// Calculate Sum Of All Numbers Of An Array
/* function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers); */


// Get Odd Number From An Array And Then Sum Of All Odd Number
// Get Odd Number From An Array
/* function getOddNumbersOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

// Get Sum From The Odd Number Array
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum:', oddNumberSum); */


// Problem-03: write a function findOddSum() that will take the array [5,7,8,10,45,30] as the input parameter and will return the sum of the odd numbers.

function findOddNumbers(numbers) {
    const oddNumbers = []
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function findOddSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

const numbers = [5, 7, 8, 10, 45, 30];
const oddNumbersOfAnArray = findOddNumbers(numbers);
console.log('Odd Numbers Of The Input Array:', oddNumbersOfAnArray)
const oddNumbersSum = findOddSum(oddNumbersOfAnArray);
console.log('Sum Of The Input Odd Numbers:', oddNumbersSum)
