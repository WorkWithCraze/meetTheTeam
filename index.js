const express = require("express");
const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Server is running now...");
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
