"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProvinciaController_1 = __importDefault(require("../controllers/ProvinciaController"));
const ProvinciaRouter = express_1.Router();
const provinciaController = new ProvinciaController_1.default();
ProvinciaRouter.post('/provincia', provinciaController.create);
ProvinciaRouter.get('/provincia', provinciaController.index);
ProvinciaRouter.get('/provincia/:id', provinciaController.show);
exports.default = ProvinciaRouter;
