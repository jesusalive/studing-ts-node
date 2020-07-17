import {Request, Response} from 'express'
import { User } from "@models/User";
export class UserController {
    static getAll(req: Request, res: Response) {
        return res.json([{name: "Matheus", email: "teste@teste.com"}])
    }
}