const fs = require('fs');

const requestHandler = (req, res) => {
    consol  e.log("req.url", req.url)
    console.log("req.method", req.method)
    console.log("req.headers", req.headers)
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">submit</button></form></body>');
        res.write('<html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        //buffer concept
        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk)
        })
        req.on('end', () => {
            const parserBody = Buffer.concat(body).toString();
            console.log('parserBody', parserBody);
            const message = parserBody.split('=')[1];
            fs.writeFile('message.text', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
};

module.exports = requestHandler;