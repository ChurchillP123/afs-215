const {expect} = require('chai');
const TodoList = require('./TodoList');

describe('Testing Class TodoList', () => {
    it('Can Call List', () => {
        expect(todoList.callList()).to.deep.equal(['1','2','3']);
    })
    it('Can Add Item to List', () => {
        expect(todoList.addItemToList(4)).to.deep.equal(['1','2','3', 4]);
    })
    it('Can Add Multiple Items to List', () => {
        expect(todoList.addMultipleItemsToList([4], true)).to.deep.equal(['1', '2', '3', [4], true]);
    })
    it('Can Remove First Item of List', () => {
        expect(todoList.removeFirstItem()).to.deep.equal(['2', '3']);
    })
    it('Can Remove Last Item of List', () => {
        expect(todoList.removeLastItem()).to.deep.equal(['1', '2']);
    })
    it('Can Remove Specific Item of List', () => {
        expect(todoList.removeSpecificItem(0, 1)).to.deep.equal(['2', '3']);
    })
    beforeEach(function(){
        todoList = new TodoList()
        todoList.addMultipleItemsToList('1', '2', '3')
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