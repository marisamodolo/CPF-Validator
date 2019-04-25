function cpfValidator (number) {
  if(number.length < 11){
    return false;
  }
  for(let i; i<11; i++){
    console.log("ab")
  }
  let a = '0'.repeat(11);
  console.log(a)
  let cpf = number.toString().split("");
  let cpf2 = number.toString().split("");
  let firstDigit = checkDigit(cpf, 9);
  let secondDigit = checkDigit(cpf2, 10);
  console.log(firstDigit, secondDigit); 
}

function checkDigit (cpf, length) {
  let checkValidator = cpf.splice(0, length);
  let multiply = length + 1;
  let total = 0;
  for (i of checkValidator) {
    let result = i * multiply;
    multiply = multiply - 1;
    total += result;
  }
  let finalDigit = (total * 10) % 11;
  return finalDigit.toString();
}

cpfValidator(47154849860);
module.exports.cpfValidator = cpfValidator;
