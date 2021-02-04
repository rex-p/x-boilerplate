import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./Posts.links";
import * as reducers from "./Posts.reducers";
import { Post } from "./Post.model";

export class PostsCollection extends Collection<Post> {
  static collectionName = "posts";
  static model = Post;

  static links = links;
  static reducers = reducers;

  static behaviors = [Behaviors.Timestampable(), Behaviors.Blameable()];

  // Create an array of indexes
  static indexes = [{ key: { createdAt: 1 } }, { key: { createdBy: 1 } }];
}
