const express = require("express");
const config = require("./config/config");
const regRouter = require("./routes/reg.route");

const app = express();

const PORT = process.env.PORT ?? 3000;
config(app);

app.use("/reg", regRouter);

app.listen(PORT, () => {
  console.log("The server started on", PORT);
});
