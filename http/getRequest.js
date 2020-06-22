/*
서버에 GET요청을 보내고 내용을 가져온다.
*/
const http = require('http');
const options = {
    hostname:'localhost',
    port:1919,
    path:'/'
}
const handleResponse = (response) =>{
    let serverData='';
    response.on('data',(chunk)=>{
        serverData+=chunk;
    });
    response.on('end',()=>{
        console.log(serverData);
    });
}
http.request(options,(response)=>{
    handleResponse(response);
}).end();