var http = require('http')

http.createServer((req, res)=>{

    res.writeHead(200,{'Context-Type' : 'text/plain'})
    res.end('Hello Muhammed shakkeer')
//  http://localhost:8080
}).listen(8080)

// 1. npm init
// 2. give config in command