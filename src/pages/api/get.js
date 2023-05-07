const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = querystring.parse(body);
      console.log(data);
      res.end('Data received successfully');
    });
  } else {
    res.end('Invalid request');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
