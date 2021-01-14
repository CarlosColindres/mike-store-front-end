"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_schema_1 = require("./auth.schema");
var createUser = function (user) {
    return auth_schema_1.UserModel.create(user);
};
var findUserByUsername = function (userName) {
    return auth_schema_1.UserModel.findOne({ userName: userName }).lean().exec();
};
exports.default = {
    createUser: createUser,
    findUserByUsername: findUserByUsername,
};
