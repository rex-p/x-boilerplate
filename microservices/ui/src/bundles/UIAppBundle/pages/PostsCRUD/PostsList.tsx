import { newSmart, QueryBodyType, use, useSmart } from "@kaviar/x-ui";
import React, { useEffect, useState } from "react";
import { Post, PostsCollection } from "../../collections";
import { ListSmart } from "./ListSmart";

const PostsListContext = React.createContext(null);
class PostsListSmart extends ListSmart<Post> {
  static getContext() {
    return PostsListContext;
  }
}

export function PostsList() {
  console.log("render");
  const postsCollection = use(PostsCollection);
  const [api, Provider] = newSmart(PostsListSmart, {
    collectionClass: PostsCollection,
    // should not work without body
    body: {
      _id: 1,
      title: 1,
      // _id: 1,
    },
  });

  if (api.state.isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <Provider>
        <PostsListTable />
      </Provider>
    );
  }
}

function PostsListTable() {
  const api = useSmart(PostsListSmart);
  const { documents } = api.state;

  return (
    <ul>
      {documents.map((post) => {
        return (
          <li>
            {post.title} {post.user?.profile?.firstName}
          </li>
        );
      })}
    </ul>
  );
}
