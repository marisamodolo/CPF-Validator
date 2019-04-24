let chai = require("chai");
let expect = chai.expect;
let cpf = require("../lib/index.js");

describe("primeiro digito igual ao resultado da conta", () => {
    it("primeiro digito deve retornar 6", () => {
        expect(cpf.cpfValidator("47154849860")).to.equal("6")
    })
}) 