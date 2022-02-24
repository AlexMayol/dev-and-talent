import { User } from "../../User/domain";

export interface UserActions {
    create: (user: User) => Promise<string>

}
