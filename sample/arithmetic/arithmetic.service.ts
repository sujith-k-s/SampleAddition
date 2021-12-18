import { AritmeticAdditionDTO } from "./dto/Arithmetic.addition.dto";


/**
 * @description Performs Basic Arithmetic Operations
 */
export class ArithmeticService {
    constructor() { }

    /**
     * Perform Aritmetic Addition of "n" number of numbers
     * @param params Referres @link AritmeticAdditionDTO
     * @returns sum of input numbers
     */
    async addition(params: AritmeticAdditionDTO): Promise<{ sum: number }> {
        let sum = 0;
        params.numbers.map(number => {
            sum += number;
        })
        return {
            sum: sum
        }
    }
}