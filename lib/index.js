function cpfValidator(number){
let cpf = number.toString().split("");
let checkValidators = cpf.splice(0, 9)
console.log(checkValidators);
console.log(cpf);
let multiply = 10;
let total = 0;
for (i of checkValidators) {
    let result = i*multiply;
    console.log(result)
    multiply = multiply-1;
    total += result;
}
console.log(total)
let naosei = (total*10)%11;
console.log(naosei)
return naosei.toString()
}
cpfValidator(47154849860)
module.exports.cpfValidator = cpfValidator;
