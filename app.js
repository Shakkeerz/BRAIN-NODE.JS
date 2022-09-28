
// creating basic server
var http = require("http")
var fs = require('fs')
http.createServer((req,res)=>{
    fs.readFile('index.html',(error,data)=>{
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(data)
        res.write("inside written")
        res.end()
    })
    
}).listen(3000)
 