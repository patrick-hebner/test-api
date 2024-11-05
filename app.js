const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({
    route: "/",
    method: "GET"
  });
});

app.get("/test", (req, res) => {
  res.json({
    route: "/test",
    method: "GET"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
