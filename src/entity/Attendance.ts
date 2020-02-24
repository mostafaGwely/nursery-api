import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Student } from "./Student";

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  arrive_Date: Date;

  @Column()
  arrive_with: string;

  @Column()
  departure_Date: Date;

  @Column()
  leaved_with: string;

  @ManyToOne(
    type => Student,
    student => student.attendances
  )
  student: Student;
}
