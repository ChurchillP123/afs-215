class TodoList {
    constructor() {
        this.list = [];
    }
    callList(){
        return this.list;
    }
    addItemToList(item){
        this.list.push(item);
        return this.list;
    }
    addMultipleItemsToList(...args){
        this.list = this.list.concat(args);
        return this.list;
    }
    removeFirstItem(){
        this.list.shift()
        return this.list
    }
    removeLastItem(){
        this.list.pop()
        return this.list
    }
    removeSpecificItem(beg, end){
        this.list.splice(beg, end)
        return this.list
    }

}
module.exports = TodoList;