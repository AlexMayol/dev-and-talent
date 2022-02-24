import { User } from "../../domain";

export interface getById {
    (id: string): Promise<User>
}
