const express = require("express");
const config = require("./config/config");

const app = express();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log("The server started on", PORT);
});
