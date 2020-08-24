"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProvinciaRoute_1 = __importDefault(require("./ProvinciaRoute"));
const MunicipioRoute_1 = __importDefault(require("./MunicipioRoute"));
const EscolaRoute_1 = __importDefault(require("./EscolaRoute"));
const routes = express_1.Router();
routes.use(ProvinciaRoute_1.default);
routes.use(MunicipioRoute_1.default);
routes.use(EscolaRoute_1.default);
exports.default = routes;
