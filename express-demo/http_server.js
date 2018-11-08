const http = require('http');

const data = {
  ceo: 'john',
  director: 'su'
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('HappyHacking');
  }

  if(req.url === '/api') {
    res.write(SON.stringify(data));
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000');