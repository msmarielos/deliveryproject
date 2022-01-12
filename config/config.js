const express = require("express");
const morgan = require("morgan");
// const path = require("path");
// const bcrypt = require('bcrypt');

const config = (app) => {
  app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.set("view engine", "hbs");
};



module.exports = config;
