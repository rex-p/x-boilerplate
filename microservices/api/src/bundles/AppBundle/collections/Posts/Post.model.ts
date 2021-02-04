import { ObjectId } from "@kaviar/ejson";
import { Schema, Is, a, an } from "@kaviar/validator-bundle";
import { Type } from "class-transformer";
import { User } from "../Users/User.model";

@Schema()
export class Post {
  @Is(a.string().required())
  title: string;

  @Is(a.objectId().required())
  _id: any;

  @Type(() => User)
  user: User;
  userId: ObjectId;

  tagIds: ObjectId[];
}
