// Create web server
// 1. Create a web server
// 2. Parse the URL and get the path
// 3. Parse the query string and get the comments
// 4. If the path is /comments, return the comments
// 5. If the path is not /comments, return a 404 page
// 6. Start the server on port 3000

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;

  if (path === '/comments') {
    const comments = url.parse(req.url, true).query.comments;
    res.write(comments);
  } else {
    res.write('404 - Not Found');
  }

  res.end();
});

server.listen(3000);
console.log('Server is listening on port 3000');