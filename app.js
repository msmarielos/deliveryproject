const express = require("express");
const config = require("./config/config");
const regRouter = require("./routes/reg.route");
const regDev = require("./routes/dev.route");
const mainRouter = require("./routes/main.route");

const app = express();

const PORT = 3000;
config(app);

app.use("/reg", regRouter);
app.use("/deli", regDev);
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log("The server started on", PORT);
});
