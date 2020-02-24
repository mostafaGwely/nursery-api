import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Student } from "./Student";

//single Student has many payment, but one payment has single student

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  paid_amount: number;

  @Column()
  rest_amount: number;

  @ManyToOne(
    type => Student,
    student => student.payments
  )
  student: Student;
}
