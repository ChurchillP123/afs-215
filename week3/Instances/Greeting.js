module.exports = class Greeting {
    constructor(num) {
        this.num = num;
    }
    greeting(){
        if (typeof(this.num) != "number") {
            return "Not a Number!"
        } else if (this.num % 3 == 0 && this.num % 7 == 0) {
            return "Good Evening"
        } else if (this.num % 3 == 0) {
            return "Good Morning"
        } else if (this.num % 7 == 0) {
            return "Good Afternoon"
        } else {
            return String(this.num)
        }
    }
}