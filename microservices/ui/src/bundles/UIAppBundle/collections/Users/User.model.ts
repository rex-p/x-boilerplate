import { ObjectId } from "@kaviar/ejson";

export class User {
  _id: ObjectId;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
  };
}
