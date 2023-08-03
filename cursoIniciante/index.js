const {Person} = require('./person')

//modulo path
// require("./modules/path")
// require('./modules/fs')
require('./modules/http')

const person = new Person('Arthur')

console.log(person.sayMyName())  