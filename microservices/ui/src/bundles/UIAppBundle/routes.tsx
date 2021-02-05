import { IRoute } from "@kaviar/x-ui";
import { HomePage } from "./pages/Home.page";
import { PostsList } from "./pages/PostsCRUD/PostsList";
import { PostsListLive } from "./pages/PostsCRUD/PostsListLive";

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
