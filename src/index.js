const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { returnCode } = req.query;
  const statusCode = parseInt(returnCode, 10) || 201;

  return res.status(statusCode).send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
