import { User } from "../../domain";
import { Request, Response } from 'express'

import { CreateUser } from "../../application/createUser";

const createUser: CreateUser = async (user: User) => {
    user.id = `${Math.random()}`
    user.email = `modified`
    return await user
}
export const createUserAction = async (req: Request, res: Response) => {
    const user: User = req.body
    res.send(await createUser(user))
}
