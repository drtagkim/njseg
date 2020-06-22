const http=require('http');
http.createServer((req,res)=>{
    let jsonData='';
    //Client request
    req.on('data',(chunk)=>{
        jsonData+=chunk;
    });
    //Server response
    req.on('end',()=>{
        let reqObj=JSON.parse(jsonData);
        let resObj={
            message:"Hello "+reqObj.name,
            question:"Are you "+reqObj.occupation+"?"
        };
        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}).listen(1919,()=>{
    console.log("Server running");
});