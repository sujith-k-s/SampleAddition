import { IArithmeticAddition } from "../interface/arithmetic.addition.interface";

/**
 * @description Inherits an object from IArithmeticAddition
 * @param numbers  Array of input numbers
 */
export class AritmeticAdditionDTO implements IArithmeticAddition {
    constructor(numbers: number[]) {
        this.numbers = numbers;
    }
    numbers: number[];
} 