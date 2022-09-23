let Greeting = require('./Greeting');

greet1 = new Greeting(6)
console.log(greet1.greeting())
greet2 = new Greeting(14)
console.log(greet2.greeting())
greet3 = new Greeting(21)
console.log(greet3.greeting())
greet4 = new Greeting([8])
console.log(greet4.greeting())
greet5 = new Greeting(8)
console.log(greet5.greeting())