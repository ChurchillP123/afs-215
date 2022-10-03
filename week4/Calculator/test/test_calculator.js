const {expect} = require('chai');
const Calculator = require('./calculator');

describe('My Calculator', () => {
    it('Can Call Calculator', () => {
        calc = new Calculator();
        expect(calc).to.not.be.null;
    })
    it('Can Add', () => {
        calc = new Calculator(1, 2);
        expect(calc.add()).to.equal(3)
    })
    it('Can Subtract', () => {
        calc = new Calculator(1, 2);
        expect(calc.subtract()).to.equal(-1)
    })
    it('Can Multiply', () => {
        calc = new Calculator(1, 2);
        expect(calc.multiply()).to.equal(2)
    })
    it('Can Divide', () => {
        calc = new Calculator(1, 2);
        expect(calc.divide()).to.equal(0.5)
    })
    it('Working Error Message', () => {
        calc = new Calculator([], 2);
        expect(calc.add()).to.equal("Invalid Input, NaN")
    })

})