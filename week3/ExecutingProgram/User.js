module.exports = class User {
    constructor(num1, num2, name="John Doe", age=18) {
        this.num1 = num1;
        this.num2 = num2;
        this.name = name;
        this.age = age;
    }
    add(){return this.num1 + this.num2;}
    subtract(){return this.num1 - this.num2;}
    multiply(){return this.num1 * this.num2;}
    divide(){return this.num1 / this.num2}
    greeting(){
        return "Name: " + this.name + " Age: " + this.age
    }
    stringData(){
        return String(this.num1) + this.num2;
    }
}