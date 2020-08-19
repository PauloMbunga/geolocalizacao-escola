import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn,ManyToOne }
 from "typeorm";  
import Provincia from "./Provincia";


@Entity('municipio')
export default class Municipio{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 1010,
        unique: true,
      })
     description: string;

     @ManyToOne(type => Provincia, municipio => Municipio,{eager: true})
     provincia: Provincia;
    

    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}