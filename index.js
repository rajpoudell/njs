const http = require('http');
const PORT =2000;
const hostname ="localhost"
// (request,response,next(optional for local server project))

const server = http.createServer((req,res)=>{
    res.end("working")
});

server.listen(PORT,hostname,() => {
    console.log(`server is working on http://${hostname}:${PORT}`)
});