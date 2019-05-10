function cpfValidator (number) {
  const strNumber = number.toString();
  const areNumbersEqual = strNumber.split("").every((num) => num === strNumber[0]);
  if (strNumber.length !== 11 || areNumbersEqual) {
    return false;
  }
  
  return checkDigit(strNumber, 9) === strNumber.charAt(9) && checkDigit(strNumber, 10) === strNumber.charAt(10);
}

function checkDigit (cpf, length) {
  const multiply = length + 1;
  const result = cpf
    .slice(0, length)
    .split("")
    .map((num, numID) => parseInt(num * (multiply - numID)))
    .reduce((accum, currentValue) => accum + currentValue, 0);
  let finalDigit = (result * 10) % 11;
  if(finalDigit === 10 || finalDigit === 11 || finalDigit === 1 || finalDigit === 0) {
    finalDigit = 0
  }
  return finalDigit.toString();
}

module.exports.cpfValidator = cpfValidator;
