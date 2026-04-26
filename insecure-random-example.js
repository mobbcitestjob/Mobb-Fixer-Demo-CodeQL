// This is an intentionally vulnerable JavaScript file used for testing, do not deploy.
// Triggers CodeQL rule js/insecure-randomness — Math.random() used for a security-sensitive value.

const http = require("node:http");

http.createServer((req, res) => {
  // Insecure: Math.random() is not cryptographically secure; used here for a session token.
  const token = Math.random().toString(36).substring(2);
  res.setHeader("Set-Cookie", `session=${token}; Path=/`);
  res.end("ok");
}).listen(8080);
