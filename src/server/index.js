"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var register_1 = require("@server-routes/register");
var mongoose_1 = require("mongoose");
var cookie_parser_1 = require("cookie-parser");
var login_1 = require("@server-routes/login");
var refresh_1 = require("@server-routes/refresh");
var user_1 = require("@server-routes/user");
var desk_1 = require("@server-routes/desk");
var column_1 = require("@server-routes/column");
var task_1 = require("@server-routes/task");
var valid_1 = require("@server-routes/valid");
var cors_1 = require("cors");
var app = (0, express_1.default)();
(0, dotenv_1.config)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
var port = process.env.PORT || 5000;
mongoose_1.default.connect("mongodb+srv://".concat(process.env.MONGO_LOGIN, ":").concat(process.env.MONGO_PASS, "@cluster0.ctbmkxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"));
app.use(login_1.default);
app.use(register_1.default);
app.use(refresh_1.default);
app.use(user_1.default);
app.use(valid_1.default);
app.use('/desk', desk_1.default);
app.use('/column', column_1.default);
app.use('/task', task_1.default);
app.listen(port, function () {
    console.log("server app listening on port ".concat(port));
});
