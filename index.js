const http = require('http');
const PORT =2000;
const hostname ="localhost"
// (request,response,next(optional for local server project))

const server = http.createServer((req,res)=>{
    // res.end("working")
    res.end("<h1>hello server</h1>")
});

// server.listen(2000,"localhost",() => {}
// listen() method to start a server. Let's break down the code and its functionality:
// The () => { ... } is an arrow function that serves as a callback function. 
// It contains the code that will execute once the server starts successfully.
server.listen(PORT,hostname,() => {
    console.log(`server is working on http://${hostname}:${PORT}`)
});