import { User } from "../../domain";
import { Request, Response } from 'express'

import { getById } from "../../application/getById";

const getUserById: getById = async (id): Promise<User> => {
    return await { id, name: 'pepe', email: 'a' }
}

export const getUserAction = async (req: Request, res: Response) => {
    const id = req.params.id
    res.send(await getUserById(id))
}
