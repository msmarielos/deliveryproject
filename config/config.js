const express = require("express");
const morgan = require("morgan");
const path = require("path");

const config = (app) => {
  app.use(morgan("dev"));
  app.use(express.static(path.join(__dirname, "public")));
  app.set("view engine", "hbs");
  
};


module.exports = config;
