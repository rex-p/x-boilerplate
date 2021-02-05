import * as X from "@kaviar/x-bundle";
import { PostsCollection } from "../../collections";

const resolvers = {
  Subscription: {
    postsSubscription: {
      resolve: (payload) => payload,
      subscribe: X.ToSubscription(PostsCollection),
    },
  },
};

export default resolvers;
