const express = require("express");
const morgan = require("morgan");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);
const cookieParser = require("cookie-parser");
// const path = require("path");

const sessionConfig = {
    store: new FileStore(),
    name: "user_sid", // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET || "test", // Секретное слово для шифрования, может быть любым
    resave: false, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
        maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
        httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    },
};

const config = (app) => {
    app.use(morgan("dev"));
    app.use(express.static("public"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(expressSession(sessionConfig));
    app.use(cookieParser());

    app.set("view engine", "hbs");
};

module.exports = config;