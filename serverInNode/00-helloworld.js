const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // req = new http.IncomingMessage() ;
  // res = new http.ServerResponse() ;
  /*   console.log(req instanceof http.IncomingMessage);
  console.log(res instanceof http.ServerResponse);  */

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world");
});

server.listen(port, () => console.log(`server started on port ${port}`));
