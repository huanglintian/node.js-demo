const http = require('http');

const hostname = '127.0.0.1'; // 域名
const port = 3000; // 端口

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World Node.js\n');
}); // 创建一个server

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`); // 控制台输出
}); // 监听端口