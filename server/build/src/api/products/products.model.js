"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_schema_1 = require("./products.schema");
var createProduct = function (product) {
    return products_schema_1.ShoeProductModel.create(product);
};
var getProductsByCategory = function (category) {
    return products_schema_1.ShoeProductModel.find({ category: category }).select(["name", "price", "image", "category"]).lean().exec();
};
var getProductById = function (_id) {
    return products_schema_1.ShoeProductModel.findById(_id).lean().exec();
};
var updateProduct = function (id, update) {
    return products_schema_1.ShoeProductModel.findByIdAndUpdate(id, { update: update }, { new: true })
        .lean()
        .exec();
};
exports.default = {
    createProduct: createProduct,
    getProductById: getProductById,
    getProductsByCategory: getProductsByCategory,
    updateProduct: updateProduct
};
