import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./Comments.links";
import * as reducers from "./Comments.reducers";
import { Comment } from "./Comment.model";

export class CommentsCollection extends Collection<Comment> {
  static collectionName = "comments";
  static model = Comment;

  static links = links;
  static reducers = reducers;

  static behaviors = [Behaviors.Timestampable(), Behaviors.Blameable()];

  // Create an array of indexes
  static indexes = [{ key: { createdAt: 1 } }, { key: { createdBy: 1 } }];
}
