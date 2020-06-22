console.log("helo world.");
const http=require('http');
const url=require("url");
const fs=require('fs');

http.createServer((req,res)=>{
    let pathname=url.parse(req.url).pathname;
    if(pathname==='/') {
        fs.readFile('./index.html',(e,d)=>{
            res.writeHead(200,{
                'Content-Type':"text/html"
            });
            res.end(d);
            console.log(url.parse(req.url));
        });
    } else if(pathname==="/example"){
        fs.readFile("./example.html",(e,d)=>{
            res.writeHead(200,{'Content-Type':"text/html"});
            res.end(d);
            console.log(url.parse(req.url));
        });
    } else {
        console.log(url.parse(req.url));
    }
}).listen(1919,()=>{
    console.log("Server running");
});