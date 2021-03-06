function cpfValidator (number) {
  const strNumber = number.toString();
  if (strNumber.length !== 11) {
    return false;
  }
  if (strNumber.split("").every((num) => num === strNumber[0])) {
    return false;
  }
  return checkDigit(strNumber, 9) === strNumber.charAt(9) && checkDigit(strNumber, 10) === strNumber.charAt(10) ?
    true : false;
}

function checkDigit (cpf, length) {
  let multiply = length + 1;
  const result = cpf
    .slice(0, length)
    .split("")
    .map((num, numID) => parseInt(num * (multiply - numID)))
    .reduce((accum, currentValue) => accum += currentValue);
  let finalDigit = (result * 10) % 11;
  finalDigit === 10 || finalDigit === 11 || finalDigit === 1 || finalDigit === 0 ? finalDigit = 0 : finalDigit;
  return finalDigit.toString();
}

module.exports.cpfValidator = cpfValidator;