import { Request, Response } from 'express';
import { getRepository, Repository } from 'typeorm';
import { User } from "@models/User";
class UserController {
    
    public async getAll(req: Request, res: Response) {
        const userRepository = getRepository(User)
        const users = await userRepository.find()

        return res.json(users)
    }
}

export default new UserController()