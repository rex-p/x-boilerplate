import { Collection } from "@kaviar/x-ui";
import { User } from "@root/api.types";

export class UsersCollection extends Collection<User> {
  getName() {
    return "users";
  }
}
