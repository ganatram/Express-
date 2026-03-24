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
      serveStaticFile(res, "/public/home.html", "text/html");
      /*  res.writeHead(200, { "content-type": "text/plain" });
      res.end("Home page"); */
      break;

    case "/about":
      serveStaticFile(res, "/public/about.html", "text/html");

      /* res.writeHead(200, { "content-type": "text/plain" });
      res.end("About"); */
      break;

    case "/img/logo.png":
      serveStaticFile(res, "/public/img/logo.png", "image/png");

      /* res.writeHead(200, { "content-type": "text/plain" });
      res.end("About"); */
      break;

    default:
      serveStaticFile(res, "/public/404.html", "text/html");
      /*    res.writeHead(404, { "content-type": "text/html" });
      res.end("Not Found"); */
      break;
  }

  /* res.writeHead(200, { "content-type": "text/plain" });
  res.end("hello world"); */
});

server.listen(port, () => console.log(`server started on port ${port}`));
