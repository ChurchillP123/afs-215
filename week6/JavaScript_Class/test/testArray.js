const {expect} = require('chai');
const Array = require('./Array');

describe('Testing Class Array', () => {
    it('Can Add Any Item', () => {
        // array = new Array();
        expect(array.add('3')).to.deep.equal(['1', '2', '3']);
    })
    it('Can Call Array', () => {
        // array = new Array();
        expect(array.call()).to.deep.equal(['1', '2']);
    })
    it('Can Remove Specific Item', () => {
        // array = new Array();
        // array.add('1')
        // array.add('2')
        expect(array.remove(0, 1)).to.deep.equal(['2']);
    })
    it('Can Search For Item', () => {
        // array = new Array();
        // array.add('1')
        // array.add('2')
        expect(array.search('3')).to.equal("There is no such item in array!");
    })
    beforeEach(function(){
        array = new Array()
        array.add('1')
        array.add('2')
    })
    before(function(){
        console.log("-------Testing-------")
    })
    after(function(){
        console.log("-------Done Testing-------")
    })
    afterEach(function(){
        console.log("-------Passed-------")
    })
})