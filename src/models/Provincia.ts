import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn, Unique, OneToMany }
 from "typeorm";
import Municipio from "./Municipio";


@Entity('provincia')
export default class Provincia{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 1010,
        unique: true,
      })
     description: string;

     @OneToMany(type => Municipio, provincia => Provincia)
     municipio: Municipio[];

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}