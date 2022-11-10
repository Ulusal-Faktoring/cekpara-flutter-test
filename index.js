const express = require("express");
const app = express();
const port = 3004;

app.use(express.static(__dirname + '/'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get("/test-request", (req, res) => {
  res.send("work");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
