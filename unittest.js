const stringLength = (str) => str.length >= 1 && str.length <= 10 ? str.length : false; 

const reverseString = (str) => str.split("").reverse().join("");

const calc = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  division: (a, b) => a / b,
}

const capitalize = (str) => str.charAt(0).toUpperCase()

module.exports = {stringLength, reverseString, calc , capitalize};