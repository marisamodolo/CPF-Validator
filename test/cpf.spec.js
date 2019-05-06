let chai = require("chai");
let expect = chai.expect;
let cpf = require("../lib/index.js");

describe("Retornar true para CPF válido", () => {
    it("Deve retornar true para um CPF válido", () => {
        expect(cpf.cpfValidator(47154849860)).to.equal(true);
    })
}) 

describe("Retornar false para CPF inválidos", () => {
    it("Deve retornar false para um CPF inválido (12345678910)", () => {
        expect(cpf.cpfValidator(12345678910)).to.equal(false);
    })
    it("Deve retornar false para um CPF com todos os números repetidos (11111111111)", () => {
        expect(cpf.cpfValidator(11111111111)).to.equal(false);
    })
    it("Deve retornar false para um CPF com menos de 11 dígitos (11111)", () => {
        expect(cpf.cpfValidator(11111)).to.equal(false);
    })
    it("Deve retornar false para um CPF com mais de 11 dígitos (1234567891011121314)", () => {
        expect(cpf.cpfValidator(1234567891011121314)).to.equal(false);
    })
    it("Deve retornar false se informado letras (abcdefghijklmn)", () => {
        expect(cpf.cpfValidator("abcdefghijklmn")).to.equal(false);
    })
})