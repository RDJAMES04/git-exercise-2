const square = (n) => n ** 2;

const fahrenheit = (celsius) => (celsius * 1.8) + 32;

const rectangleArea = (a, b) => a * b;

const isPalindrome = (str) => str.toUpperCase() === str.toUpperCase().split('').reverse().join('');

module.exports = {
    square,
    fahrenheit,
    rectangleArea,
    isPalindrome
}
