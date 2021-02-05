import { Collection } from "@kaviar/x-ui";
import { User } from "./User.model";

export class UsersCollection extends Collection<User> {
  getName() {
    return "users";
  }
}
