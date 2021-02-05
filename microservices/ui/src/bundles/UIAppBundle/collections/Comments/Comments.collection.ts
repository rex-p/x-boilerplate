import { Collection } from "@kaviar/x-ui";
import { Comment } from "./Comment.model";

export class CommentsCollection extends Collection<Comment> {
  getName() {
    return "comments";
  }
}
