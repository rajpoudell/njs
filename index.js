const http = require('http');
const fs = require("fs")


const PORT =2000;
const hostname ="localhost"



const home =fs.readFileSync("./index.html","utf-8")

// (request,response,next(optional for local server project))
const server = http.createServer((req,res)=>{
console.log(req.url);

    if(req.url === '/'){ //when "" requested 
       return res.end(home); // response h1 is send

    } //this is required hai ta
    
    else if(req.url ==="/about"){
        return res.end("<h1>About page</h1>");
    }

    else if(req.url ==="/contact"){
       return res.end("<h1>Contact page</h1>");
    }

    else if(req.url ==="/service"){
        return res.end("<h1>service page</h1>");
    }

    else{
       return res.end("<h1>404! Pages is not found</h1>")
    }
    
});

// server.listen(2000,"localhost",() => {}
// listen() method to start a server. Let's break down the code and its functionality:
// The () => { ... } is an arrow function that serves as a callback function. 
// It contains the code that will execute once the server starts successfully.

server.listen(PORT,hostname,() => {
    console.log(`server is working on http://${hostname}:${PORT}`)
});