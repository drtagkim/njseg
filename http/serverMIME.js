const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer((req,res)=>{
    let p=url.parse(req.url).pathname;
    if(p==='/') {
        fs.readFile('./pic.png',(error,data)=>{
            res.writeHead(200,{'Content-Type':'image/png'});
            res.write(data);
            res.end();
        });
    } else if(p==='/audio') {
        fs.readFile('./music.mp3',(error,data)=>{
            res.writeHead(200,{'Content-Type':'audio/mp3'});
            res.write(data);
            res.end();
        });
    } else if(p==='/video') {
        fs.readFile('./video.mp4',(error,data)=>{
            res.writeHead(200,{'Content-Type':'video/mp4'});
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("Nothing");
        res.end();
    }

}).listen(1919,()=>{
    console.log('server running');
});