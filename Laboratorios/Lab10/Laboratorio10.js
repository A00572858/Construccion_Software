const http = require('http');
const server = http.createServer((request,response) =>{
    if (request.url === '/'){
        response.setHeader('Content-Type','text/html');
        response.write('<!DOCTYPE html><html><head>');
        response.write('<title>Beers I have had</title>')
    }
});
server.listen(3000);