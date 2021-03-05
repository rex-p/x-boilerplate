import { Collection } from "@kaviar/x-ui";
import { Comment } from "@root/api.types";
import { ObjectId } from "@kaviar/ejson";

export class CommentsCollection extends Collection<Comment> {
  getName() {
    return "comments";
  }

  getTransformMap() {
    return {
      _id: (v: string) => new ObjectId(v),
    };
  }
}
