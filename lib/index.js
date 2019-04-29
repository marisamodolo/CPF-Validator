function cpfValidator (number) {
  const strNumber = number.toString();
  if (strNumber.length !== 11) {
    return false;
  }
  const numberToRepeat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let index of numberToRepeat) {
    let repeatedCPF = index.toString().repeat(11);
    if (strNumber === repeatedCPF) {
      return false;
    }
  }
  if (checkDigit(strNumber, 9) !== strNumber.charAt(9) || checkDigit(strNumber, 10) !== strNumber.charAt(10)) {
    return false;
  } else {
    return true;
  }
}

function checkDigit (cpf, length) {
  const checkValidator = cpf.slice(0, length);
  let multiply = length + 1;
  let total = 0;
  for (let index of checkValidator) {
    let result = index * multiply;
    multiply = multiply - 1;
    total += result;
  }
  let finalDigit = (total * 10) % 11;
  if (finalDigit === 10 || finalDigit === 11) {
    finalDigit = 0;
  }
  return finalDigit.toString();
}

module.exports.cpfValidator = cpfValidator;