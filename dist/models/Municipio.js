"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Municipio_1;
const typeorm_1 = require("typeorm");
const Provincia_1 = __importDefault(require("./Provincia"));
let Municipio = Municipio_1 = class Municipio {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Municipio.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 1010,
        unique: true,
    }),
    __metadata("design:type", String)
], Municipio.prototype, "description", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Provincia_1.default, municipio => Municipio_1, { eager: true }),
    __metadata("design:type", Provincia_1.default)
], Municipio.prototype, "provincia", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_At' }),
    __metadata("design:type", Date)
], Municipio.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
    __metadata("design:type", Date)
], Municipio.prototype, "updatedAt", void 0);
Municipio = Municipio_1 = __decorate([
    typeorm_1.Entity('municipio')
], Municipio);
exports.default = Municipio;
