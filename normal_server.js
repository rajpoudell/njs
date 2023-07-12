const http = require('http');
// const PORT =2000;
const hostname ="localhost"
// (request,response,next(optional for local server project))

// const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.end===""){ //when "" requested 
        res.end("<h1>default page</h1>"); // response h1 is send

    } //this is required hai ta
    if(req.url ==="/about"){

        res.end("<h1>About page</h1>");
    }
    if(req.url ==="/contact"){

        res.end("<h1>Contact page</h1>");
    }
    if(req.url ==="/service"){

        res.end("<h1>service page</h1>");
    }else{
        res.end("<h1>404! Page is not found</h1>")
    }
    
});

// server.listen(2000,"localhost",() => {}
// listen() method to start a server. Let's break down the code and its functionality:
// The () => { ... } is an arrow function that serves as a callback function. 
// It contains the code that will execute once the server starts successfully.
server.listen(PORT,hostname,() => {
    console.log(`server is working on http://${hostname}:${PORT}`)
});