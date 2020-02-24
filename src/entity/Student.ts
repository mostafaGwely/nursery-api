import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";

import { Teacher } from "./Teacher";
import { Payment } from "./Payment";
import { Attendance } from "./Attendance";
//student is owned by only one single teacher, but Teacher can have multiple students
//student has many payments, but one payment has single student

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  parent_job: string;

  @Column()
  phone: string;

  @Column()
  stage: string;

  @ManyToOne(
    type => Teacher,
    teacher => teacher.students
  )
  teacher: Teacher;

  @OneToMany(
    type => Payment,
    payment => payment.student
  )
  payments: Payment[];

  @OneToMany(
    type => Attendance,
    attendance => attendance.student
  )
  attendances: Attendance[];
}
