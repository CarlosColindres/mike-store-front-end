"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_controllers_1 = __importDefault(require("./auth.controllers"));
var auth_middleware_1 = require("../middleware/auth.middleware");
var router = express_1.Router();
// api/auth/register
router.post('/register', auth_middleware_1.authValidation, auth_controllers_1.default.registerUser);
// api/auth/login
router.post('/login', auth_middleware_1.authValidation, auth_controllers_1.default.loginUser);
exports.default = router;
