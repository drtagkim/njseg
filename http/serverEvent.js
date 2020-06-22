const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer();
server.on('request',(req,res)=>{
    res.end("HelloWorld");
    console.log(req.url);
});
server.on('close',()=>{
    console.log("Server terminated");
});
server.on('connection',()=>{
    console.log("Server connected");
});
server.listen(1919,()=>{
    console.log("server is running");
});
setTimeout(()=>{
    server.close();
},5000);