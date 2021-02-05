import { Collection } from "@kaviar/x-ui";
import { Post } from "./Post.model";

export class PostsCollection extends Collection<Post> {
  getName() {
    return "posts";
  }
}
