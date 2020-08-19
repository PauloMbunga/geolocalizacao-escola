"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Municipio_1 = __importDefault(require("../models/Municipio"));
class MunicipioController {
    async create(request, response) {
        try {
            const repo = typeorm_1.getRepository(Municipio_1.default);
            const res = await repo.save(request.body);
            return response.status(201).json(res);
        }
        catch (err) {
            console.log('err.message :>> ', err.message);
            return response.status(400).send();
        }
    }
    async show(request, response) {
        const { id } = request.params;
        response.json(await typeorm_1.getRepository(Municipio_1.default).find({
            where: {
                provincia: id
            }
        }));
    }
    async index(request, response) {
        response.json(await typeorm_1.getRepository(Municipio_1.default).find());
    }
}
exports.default = MunicipioController;
