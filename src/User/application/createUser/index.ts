import { User } from "../../domain";

export interface CreateUser {
    (user: User): Promise<User>
}
