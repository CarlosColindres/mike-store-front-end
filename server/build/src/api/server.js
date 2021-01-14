"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = require("body-parser");
var server = express_1.default();
//Routers
var products_router_1 = __importDefault(require("./products/products.router"));
var auth_router_1 = __importDefault(require("./auth/auth.router"));
server.use(cors_1.default());
server.use(body_parser_1.json());
server.use(body_parser_1.urlencoded({ extended: true }));
server.use(morgan_1.default('dev'));
server.use('/api/products', products_router_1.default);
server.use('/api/auth', auth_router_1.default);
server.get('/', function (_, res) {
    res.json('Welcome to mike store');
});
exports.default = server;
