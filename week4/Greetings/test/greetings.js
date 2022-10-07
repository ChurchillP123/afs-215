class Greetings {
    constructor(num) {
        this.num = num;
    }
    getGreeting(){
        if (typeof this.num != 'number'){
            return "Invalid Input, NaN"
        }
        else if (this.num < 3 && this.num > 0){
            return String(this.num)
        }
        else if (this.num % 3 == 0 && this.num % 7 == 0){
            return "Good Evening"
        } else if (this.num % 3 == 0){
            return "Good Morning"
        } else if (this.num % 7 == 0){
            return "Good Afternoon"
        } else {
            return String(this.num)
        }
    }
}

module.exports = Greetings;