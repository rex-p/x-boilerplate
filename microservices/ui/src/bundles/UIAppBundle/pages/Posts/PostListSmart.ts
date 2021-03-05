import { ListSmart } from "@kaviar/x-ui";
import React from "react";
import { PostsCollection } from "../../collections";
import { Post } from "@root/api.types";

const PostsListContext = React.createContext(null);
export class PostsListSmart extends ListSmart<Post> {
  collectionClass = PostsCollection;

  body = {
    _id: 1,
    title: 1,
    user: {
      profile: {
        firstName: 1,
        lastName: 1,
      },
    },
  };

  static getContext() {
    return PostsListContext;
  }
}
