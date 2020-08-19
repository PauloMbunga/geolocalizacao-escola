import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn} from "typeorm";


@Entity('escola')
export default class Escola{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        type: "varchar",
        length: 1010,
        unique: true,
      })
     codigo: string;

     @Column({
        type: "varchar",
        length: 1000,
        unique: true,
      })
     nome: string;

     @Column({
        type: "decimal",
      })
     latitude: number;

     @Column({
        type: "decimal",
      })
     longitude: number;

     @Column({
        type: "decimal",
      })
     altitude: number;
     @Column({
        type: "decimal",
      })
     speed: number;
     @Column({
        type: "decimal",
      })
     accuracy: number;

     @Column({
        type: "decimal",
      })
     heading: number;

     @Column({
        type: "varchar",
        length: 1000,
      })

      provincia: string;


      @Column({
        type: "varchar",
        length: 1000,
      })

      municipio: string;


    @CreateDateColumn({ name: 'created_At' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updatedAt: Date;

}