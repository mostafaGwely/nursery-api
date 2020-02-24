import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Attendance } from "../entity/Attendance";

export class AttendanceController {
  private AttendanceRepository = getRepository(Attendance);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.AttendanceRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.AttendanceRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.AttendanceRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let AttendanceToRemove = await this.AttendanceRepository.findOne(
      request.params.id
    );
    await this.AttendanceRepository.remove(AttendanceToRemove);
  }
}
