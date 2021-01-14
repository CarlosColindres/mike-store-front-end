"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeToken = exports.hashPassword = void 0;
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var hashPassword = function (password) {
    var rounds = process.env.BCRYPT_ROUNDS || 8;
    var hashedPassword = bcryptjs_1.default.hashSync(password, rounds);
    return hashedPassword;
};
exports.hashPassword = hashPassword;
var makeToken = function (user) {
    var payload = {
        userName: user.userName,
        subject: user._id,
    };
    var options = {
        expiresIn: '8 hours',
    };
    var jwtSecret = process.env.JWT_SECRET || 'secret';
    return jsonwebtoken_1.default.sign(payload, jwtSecret, options);
};
exports.makeToken = makeToken;
