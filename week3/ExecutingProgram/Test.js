let User = require('./User')

user1 = new User(1, 2, "Asher", 22)
user2 = new User(2, 5, "Thurell", 19)
console.log("---User1---")
console.log(user1.add())
console.log(user1.subtract())
console.log(user1.multiply())
console.log(user1.divide())
console.log(user1.stringData())
console.log("---User2---")
console.log(user2.add())
console.log(user2.subtract())
console.log(user2.multiply())
console.log(user2.divide())
console.log(user2.stringData())