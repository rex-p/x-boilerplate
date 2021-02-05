import { ObjectId } from "@kaviar/ejson";
import { User } from "../Users";

export class Post {
  _id: ObjectId;
  title: string;
  user: User;
}
