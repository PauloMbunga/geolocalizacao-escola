"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Escola_1 = __importDefault(require("../models/Escola"));
class EscolaController {
    async create(request, response) {
        try {
            const repo = typeorm_1.getRepository(Escola_1.default);
            const res = await repo.save(request.body);
            return response.status(201).json(res);
        }
        catch (err) {
            console.log('err.message :>> ', err.message);
            return response.status(400).send();
        }
    }
    async index(request, response) {
        response.json(await typeorm_1.getRepository(Escola_1.default).find());
    }
    async show(request, response) {
        const { codigo } = request.params;
        response.json(await typeorm_1.getRepository(Escola_1.default).find({
            where: {
                codigo: codigo
            }
        }));
    }
}
exports.default = EscolaController;
