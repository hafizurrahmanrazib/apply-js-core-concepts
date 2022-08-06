// problem 02: Mile To Kilometer Convert
function mileToKilometer(miles) {
    const kilometer = miles * 1.60934;
    return kilometer;
}

const johnMiles = 2;
var officeDistance = mileToKilometer(johnMiles);
console.log('John Home To Office Distance In Kilometers:', officeDistance);

// problem 03: Meter To Centimeter Convert
function meterToCentimeter(meters) {
    const centimeter = meters * 100;
    return centimeter;
}

const jackMeter = 10;
const playGroundDistance = meterToCentimeter(jackMeter);
console.log('Jack Home To Play Ground Distance In Centimeters:', playGroundDistance);

// problem 04: Kilogram To Gram Convert
function kilogramToGram(kilograms) {
    const gram = kilograms * 1000;
    return gram;
}

const jacobWeightKilograms = 65;
const jacobWeightGrams = kilogramToGram(jacobWeightKilograms);
console.log('Jacob Weight In Grams:', jacobWeightGrams);