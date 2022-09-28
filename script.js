const interveel = setInterval(()=>{
console.log("Running...")
},1000)

// use clearintervel to avoid memory leak
setTimeout(()=>{
        clearInterval(interveel)
},2000)

// window === global
// eg:- global.console.log("global")

global.console.log("global")
console.log(global)

console.log(__dirname)
console.log(__filename)

const path = require('path')
console.log(path)
console.log(path.dirname)
console.log(path.basename(__filename))
path.parse(__filename)
path.extname(__filename)

path.join(__dirname, "api", "script" )  // api\script.js   (api:- append folder ,script:- file name to join)

const fs = require('fs')

// WATCH VIDEO -------------------
// ----------   https://www.youtube.com/watch?v=CDa-V0lt6j8   -------------------