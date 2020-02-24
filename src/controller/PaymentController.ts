import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Payment } from "../entity/Payment";

export class PaymentController {
  private PaymentRepository = getRepository(Payment);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.PaymentRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.PaymentRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.PaymentRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let PaymentToRemove = await this.PaymentRepository.findOne(
      request.params.id
    );
    await this.PaymentRepository.remove(PaymentToRemove);
  }
}
