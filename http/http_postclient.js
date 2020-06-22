const http=require('http');
const req=http.request({
    host:'localhost',
    path:"/",
    port:1919,
    method:'POST'
},(res)=>{
    let responseData='';
    res.on('data',(chunk)=>{
        responseData+=chunk;
    });
    res.on('end',()=>{
        let dataObj=JSON.parse(responseData);
        console.log("Raw:"+responseData);
        console.log("Message:"+dataObj.message);
        console.log("Question:"+dataObj.question);
    });
})
var data={
    name:"Taekyung",
    occupation:"Professor"
}
req.write(JSON.stringify(data));
req.end();