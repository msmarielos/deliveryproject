const express = require("express");
const config = require("./config/config");
const regRouter = require("./routes/reg.route");
const regDev = require("./routes/dev.route");

const app = express();

const PORT = process.env.PORT ? ? 3000;
config(app);

app.use("/reg", regRouter);
app.use("/reg", regDev);

app.listen(PORT, () => {
    console.log("The server started on", PORT)
});