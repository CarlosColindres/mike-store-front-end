"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeProductModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var shoeProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    displayImages: [
        {
            type: String,
            required: true
        },
    ],
    shoeSize: [
        {
            type: Number,
            required: true,
        },
    ],
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
}, { timestamps: true });
exports.ShoeProductModel = mongoose_1.default.model('shoe', shoeProductSchema);
