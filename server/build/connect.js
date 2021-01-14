"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var connect = function (url) {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
exports.connect = connect;
