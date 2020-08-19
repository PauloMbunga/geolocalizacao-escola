"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MunicipioController_1 = __importDefault(require("../controllers/MunicipioController"));
const MunicipioRouter = express_1.Router();
const municipioController = new MunicipioController_1.default();
MunicipioRouter.post('/municipio', municipioController.create);
MunicipioRouter.get('/municipio', municipioController.index);
MunicipioRouter.get('/municipio/:id', municipioController.show);
exports.default = MunicipioRouter;
