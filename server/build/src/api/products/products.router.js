"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_controllers_1 = __importDefault(require("./products.controllers"));
var router = express_1.Router();
// /api/products/:id
router.get('/:category', products_controllers_1.default.getByCategory);
router.get('/shoe/:id', products_controllers_1.default.getProductById);
exports.default = router;
