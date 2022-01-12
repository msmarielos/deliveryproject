const express = require("express");
const morgan = require("morgan");

const config = (app) => {
  app.use(morgan("dev"))
  
}

module.exports = config;
