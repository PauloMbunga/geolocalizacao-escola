"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EscolaController_1 = __importDefault(require("../controllers/EscolaController"));
const EscolaRouter = express_1.Router();
const escolaController = new EscolaController_1.default();
EscolaRouter.post('/escola', escolaController.create);
EscolaRouter.get('/escola', escolaController.index);
EscolaRouter.get('/escola/:id', escolaController.show);
exports.default = EscolaRouter;
