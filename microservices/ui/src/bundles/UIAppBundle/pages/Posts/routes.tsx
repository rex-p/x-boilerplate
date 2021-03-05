import { IRoute } from "@kaviar/x-ui";
import { PostsList } from "./PostsList";
import { PostsListLive } from "./PostsListLive";

export const POSTS_LIST: IRoute = {
  path: "/posts/list",
  component: PostsList,
};

export const POSTS_LIST_LIVE: IRoute = {
  path: "/posts/live",
  component: PostsListLive,
};
