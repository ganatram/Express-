const http = require("node:http");
const fs = require("fs");
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      return res.end("500 - Internal server error");
    }

    res.writeHead(responseCode, { "content-type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("Home page");
      break;

    case "/about":
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("About");
      break;

    default:
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not Found");
      break;
  }

  /* res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world"); */
});

server.listen(port, () => console.log(`server started on port ${port}`));
