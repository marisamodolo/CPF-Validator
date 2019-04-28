function cpfValidator (number) {
  let strNumber = number.toString();
  if(strNumber.length !== 11){
    console.log(false);
  }else{
    let teste = [1,2,3,4,5,6,7,8,9];
    let isEqual;
    for(i of teste){
      let a = i.toString().repeat(11);
      if(number == a){
        isEqual = false;
      }
    }
    if(isEqual === false){
      console.log(false)
    }else{
    let cpfToFirstDigit = strNumber.split("");
    let cpfToSecondDigit = strNumber.split("");
    let firstDigit = checkDigit(cpfToFirstDigit, 9);
    let secondDigit = checkDigit(cpfToSecondDigit, 10);
    if( firstDigit !== strNumber.charAt(9) || secondDigit !== strNumber.charAt(10)){
      console.log(false)
    }else{
      console.log(true)
    }
    console.log(firstDigit, secondDigit); 
    }
  }
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
  if(finalDigit === 10 || finalDigit === 11){
    finalDigit = 0;
  }
  return finalDigit.toString();
}

cpfValidator(39594018844);
module.exports.cpfValidator = cpfValidator;