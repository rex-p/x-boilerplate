import { IRoute } from "@kaviar/x-ui";
import { HomePage } from "./pages/Home/Home";
import { PostsList } from "./pages/Posts/PostsList";
import { PostsListLive } from "./pages/Posts/PostsListLive";
export * from "./pages/routes";

export const HOME_PAGE: IRoute = {
  path: "/",
  component: HomePage,
};

export const POSTS_LIST: IRoute = {
  path: "/posts/list",
  component: PostsList,
};

export const POSTS_LIST_LIVE: IRoute = {
  path: "/posts/live",
  component: PostsListLive,
};
