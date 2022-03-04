import { findUser as findUserAction, createUser as createUserAction } from '../../../../actions/user'
import { User } from '../../../../domain/user'

const users: User[] = [
    {
        id: '1',
        email: '1',
        name: '1',
    },
    {
        id: '2',
        email: '2',
        name: '2',
    },
]

export class userRepositoryInMemory {
    findUser: findUserAction = async (userId: string): Promise<User> => {
        return Promise.resolve(users[1])
    }

    createUser: createUserAction = async (user: User): Promise<User> => {
        users.push(user)
        console.log(users.length)
        return user
    }
}
