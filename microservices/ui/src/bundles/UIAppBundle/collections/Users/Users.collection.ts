import { Collection } from "@kaviar/x-ui";
import { User } from "@root/api.types";
import { ObjectId } from "@kaviar/ejson";

export class UsersCollection extends Collection<User> {
  getName() {
    return "users";
  }

  getTransformMap() {
    return {
      _id: (v: string) => new ObjectId(v),
    };
  }
}
