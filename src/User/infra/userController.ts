import { Request, Response } from 'express'

import { User } from '../../User/domain'
import { createUserAction } from './createUser'
import { getUserAction } from './getUser'

const pepe: User = {
    id: '1',
    name: 'de2',
    email: 'a'
}

export const getPepe = async (req: Request, res: Response) => {
    res.json(pepe)
}
export const getPepes = async (req: Request, res: Response) => {
    res.json([pepe, pepe])
}

export {
    createUserAction,
    getUserAction
}
