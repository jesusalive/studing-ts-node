import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import { User } from "@models/User";
export class UserController {

    static async getAll(req: Request, res: Response) {
        const userRepository = getRepository(User)
        const users = await userRepository.find()

        return res.json(users)
    }
}