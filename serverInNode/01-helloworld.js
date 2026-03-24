const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  /* res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world"); */
});

server.listen(port, () => console.log(`server started on port ${port}`));
