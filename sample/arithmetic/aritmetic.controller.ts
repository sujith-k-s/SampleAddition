import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { ArithmeticService } from "./arithmetic.service";
import { AritmeticAdditionDTO } from "./dto/Arithmetic.addition.dto";
const arithmeticService = new ArithmeticService()

export class ArithmeticController {
    constructor() { }

    async addition(req: Request, res: Response, next: NextFunction): Promise<any> {
        const body: AritmeticAdditionDTO = req.body
        try {
            const data = await arithmeticService.addition(body)
            if (data) {
                res.send({
                    message: "Operation Successful",
                    data: data
                })
            }
        } catch (error) {
            next(error)
        }
    }
}