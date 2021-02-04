import { Schema, Is, a, an } from "@kaviar/validator-bundle";
import { ObjectId } from "@kaviar/ejson";
import { Type } from "class-transformer";
import { User } from "../Users";
import { Post } from "../Posts";

@Schema()
export class Comment {
  @Is(a.string().required())
  content: string;

  @Is(a.objectId().required())
  _id: any;

  @Type(() => Post)
  post: Post;
  postId: ObjectId;

  @Type(() => User)
  user: User;
  userId: ObjectId;
}
