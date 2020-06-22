/*
동적으로 GET 요청을 처리하려면 클라이언트의 요청에 대한 동적 데이터 구성에 
필요한 요청 핸들러를 구현하고 응답 데이터를 작성한다. 
다음으로 end() 함수를 호출해 요청을 마무리하고 Writable 스트림을 비운다.
*/
//SERVER
const http=require('http');
const message=[
    'Hello World',
    'Good to see you',
    'Items another!'
];
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<html>`);
    message.forEach((item)=>{
        res.write(`<h1>${item}</h1>`)
    });
    res.end(`</html>`);
}).listen(1919,()=>{console.log("Server running");});
