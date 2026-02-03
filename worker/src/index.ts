import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/run") {
    let body = "";

    req.on("data", chunk => body += chunk);

    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Worker received job" }));
    });
  }
});

server.listen(4000, () => {
  console.log("Worker running on http://localhost:4000");
});
