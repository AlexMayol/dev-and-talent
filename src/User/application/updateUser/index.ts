
import { User } from "../../domain";

export interface UpdateSuer {
    update: (user: User) => Promise<'ok'>
}
