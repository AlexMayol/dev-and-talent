import { User } from "../../domain";

export interface DeleteUser {
    delete: (user: User) => Promise<'ok'>
}
