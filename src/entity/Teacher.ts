import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Student } from "./Student";

//Teacher can have multiple students, but each student is owned by only one single teacher

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  education: string;

  @Column()
  phone: string;

  @OneToMany(
    type => Student,
    student => student.teacher
  )
  students: Student[];
}
