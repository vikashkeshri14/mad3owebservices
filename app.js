const express = require("express");
const cors = require("cors");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
app.use(
  bodyParser.json({
    extended: true,
    limit: "50mb",
  })
);

app.use(
  cors({
    origin: ["http://127.0.0.1:3010", "http://127.0.0.1:3010"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
const port = process.env.port | "3010";
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening port ${port}`);
});
