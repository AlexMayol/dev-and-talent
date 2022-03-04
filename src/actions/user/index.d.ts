import { User } from '../../domain/user'

type createUser = (user: User) => Promise<User>
type findUser = (userId: string) => Promise<User>
type updateUser = (user: User) => Promise<User>
type deleteUser = (user: User) => Promise<User>

export { createUser, findUser, updateUser, deleteUser }
