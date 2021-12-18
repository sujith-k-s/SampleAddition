import express from 'express'
import { ArithmeticController } from './arithmetic/aritmetic.controller';

const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const arithmeticController = new ArithmeticController()

app.post(
    '/addition',
    arithmeticController.addition
)


try {
    app.listen(port);
    console.log("Server Initialized")
} catch (error) {
    console.error("Server initialization Failed....")
}