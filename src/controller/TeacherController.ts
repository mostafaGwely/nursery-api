import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Teacher } from "../entity/Teacher";

export class TeacherController {
  private TeacherRepository = getRepository(Teacher);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.TeacherRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.TeacherRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.TeacherRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let TeacherToRemove = await this.TeacherRepository.findOne(
      request.params.id
    );
    await this.TeacherRepository.remove(TeacherToRemove);
  }
}
