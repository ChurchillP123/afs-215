const {expect} = require('chai');
const Greetings = require('./greetings');

describe('Test Class Greetings', () => {
    it('Can Call Greetings', () => {
        greeting = new Greetings();
        expect(greeting).to.not.be.null;
    })
    it('Return "1" when Passed 1', () => {
        greeting = new Greetings(1);
        expect(greeting.getGreeting()).to.equal("1")
    })
    it('Return "2" when Passed 2', () => {
        greeting = new Greetings(2);
        expect(greeting.getGreeting()).to.equal("2")
    })
    it('Return "Good Morning" when Passed 3', () => {
        greeting = new Greetings(3);
        expect(greeting.getGreeting()).to.equal("Good Morning")
    })
    it('Return "Good Afternoon" when Passed 7', () => {
        greeting = new Greetings(7);
        expect(greeting.getGreeting()).to.equal("Good Afternoon")
    })
    it('Return "Good Morning" when Passed a 3 or a multiple thereof', () => {
        greeting = new Greetings(6);
        expect(greeting.getGreeting()).to.equal("Good Morning")
    })
    it('Return "Good Afternoon" when Passed a 7 or a multiple thereof', () => {
        greeting = new Greetings(14);
        expect(greeting.getGreeting()).to.equal("Good Afternoon")
    })
    it('Return "Good Evening" when Passed a multiple of 3 and 7', () => {
        greeting = new Greetings(21);
        expect(greeting.getGreeting()).to.equal("Good Evening")
    })
    it('Return that Number as a String when Passed neither a multiple of 3 or 7', () => {
        greeting = new Greetings(5);
        expect(greeting.getGreeting()).to.equal("5")
    })
    it('Return error message when Passed any other data', () => {
        greeting = new Greetings([2]);
        expect(greeting.getGreeting()).to.equal("Invalid Input, NaN")
    })

    

})