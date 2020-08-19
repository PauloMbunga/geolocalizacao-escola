"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class criaTab1597831165273 {
    constructor() {
        this.name = 'criaTab1597831165273';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "escola" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "codigo" character varying(1010) NOT NULL, "nome" character varying(1000) NOT NULL, "latitude" numeric NOT NULL, "longitude" numeric NOT NULL, "altitude" numeric NOT NULL, "speed" numeric NOT NULL, "accuracy" numeric NOT NULL, "heading" numeric NOT NULL, "provincia" character varying(1000) NOT NULL, "municipio" character varying(1000) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8dff7cb703aab18e1b030c22d1e" UNIQUE ("codigo"), CONSTRAINT "UQ_d585a48a331b99e05910e8984df" UNIQUE ("nome"), CONSTRAINT "PK_447d6d45b04cc04665709b39eae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "provincia" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(1010) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3b6ed286e8f6afadd7b8b23a7c4" UNIQUE ("description"), CONSTRAINT "PK_d30aa9eff4e019f83505484187f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "municipio" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying(1010) NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "provinciaId" uuid, CONSTRAINT "UQ_3092c09cfd124b725c07bc56f30" UNIQUE ("description"), CONSTRAINT "PK_74346041a3332b7880d76c610f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "municipio" ADD CONSTRAINT "FK_b0f3c864cd42df40eca3b81ad41" FOREIGN KEY ("provinciaId") REFERENCES "provincia"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "municipio" DROP CONSTRAINT "FK_b0f3c864cd42df40eca3b81ad41"`);
        await queryRunner.query(`DROP TABLE "municipio"`);
        await queryRunner.query(`DROP TABLE "provincia"`);
        await queryRunner.query(`DROP TABLE "escola"`);
    }
}
exports.criaTab1597831165273 = criaTab1597831165273;
