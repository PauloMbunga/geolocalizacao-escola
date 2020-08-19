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
var Provincia_1;
const typeorm_1 = require("typeorm");
const Municipio_1 = __importDefault(require("./Municipio"));
let Provincia = Provincia_1 = class Provincia {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Provincia.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: "varchar",
        length: 1010,
        unique: true,
    }),
    __metadata("design:type", String)
], Provincia.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => Municipio_1.default, provincia => Provincia_1),
    __metadata("design:type", Array)
], Provincia.prototype, "municipio", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ name: 'created_At' }),
    __metadata("design:type", Date)
], Provincia.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ name: 'updated_At' }),
    __metadata("design:type", Date)
], Provincia.prototype, "updatedAt", void 0);
Provincia = Provincia_1 = __decorate([
    typeorm_1.Entity('provincia')
], Provincia);
exports.default = Provincia;
