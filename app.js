const express = require("express");
const config = require("./config/config");
const regRouter = require("./routes/reg.route");
const regDev = require("./routes/dev.route");
const mainRouter = require("./routes/main.route");
const cartRouter = require("./routes/cart.route");
const loginRouter = require("./routes/login.route");
const logouteRouter = require("./routes/logout.route");
const todeliverRouter = require("./routes/to-deliver.route");

const app = express();

const PORT = 3000;
config(app);

app.use("/reg", regRouter);
app.use("/deli", regDev);
app.use("/", mainRouter);
app.use("/cart", cartRouter);
app.use("/login", loginRouter);
app.use("/logout", logouteRouter);
app.use("/todeliver", todeliverRouter);

app.listen(PORT, () => {
  console.log("The server started on", PORT);
});
