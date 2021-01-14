"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./src/api/server"));
var PORT = process.env.PORT || 5000;
var connect_1 = require("./connect");
connect_1.connect('mongodb+srv://swavay23:Q9PTiSaZBNWVJxLP@cluster0.voceq.mongodb.net/mikeStore?retryWrites=true&w=majority')
    .then(function () {
    return server_1.default.listen(PORT, function () {
        console.log("Listening on port: " + PORT);
    });
})
    .catch(function (e) { return console.error(e); });
