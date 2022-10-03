class Calculator {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    errorMessage(){
        if (typeof this.first != 'number' || typeof this.second != 'number') {
            return "Invalid Input, NaN"
        }
    }
    add = () => this.errorMessage() || this.first + this.second
    subtract = () => this.errorMessage() || this.first - this.second
    multiply = () => this.errorMessage() || this.first * this.second
    divide = () => this.errorMessage() || this.first / this.second
}

module.exports = Calculator;