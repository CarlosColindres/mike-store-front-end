"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
var authValidation = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (!username || !password) {
        res.status(400).json({
            message: 'username and password required',
        });
    }
    else {
        next();
    }
};
exports.authValidation = authValidation;
