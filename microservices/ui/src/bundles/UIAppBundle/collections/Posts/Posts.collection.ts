import { Collection } from "@kaviar/x-ui";
import { Post } from "@root/api.types";

export class PostsCollection extends Collection<Post> {
  getName() {
    return "posts";
  }
}
