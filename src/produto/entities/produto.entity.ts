import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tb_produto"})
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 45, nullable: false})
    titulo: string;

    @IsNotEmpty()
    @Column("decimal", {precision: 5, scale: 2})
    preco: number;

    @IsNotEmpty()
    @Column({length:300, nullable: false})
    descricao: string;

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    compradores: string;
}