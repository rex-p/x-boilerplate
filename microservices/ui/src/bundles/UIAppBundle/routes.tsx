import { IRoute } from "@kaviar/x-ui";
import { HomePage } from "./pages/Home.page";
import { PostsList } from "./pages/PostsCRUD/PostsList/PostsList";

export const HOME_PAGE: IRoute = {
  path: "/",
  component: HomePage,
};

export const POSTS_LIST: IRoute = {
  path: "/posts/list",
  component: PostsList,
};
