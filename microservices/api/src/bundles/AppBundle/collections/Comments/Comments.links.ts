import { UsersCollection } from "../Users/Users.collection";
import { PostsCollection } from "../Posts/Posts.collection";
import { IBundleLinkCollectionOption } from "@kaviar/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const company: IBundleLinkCollectionOption = { ... }

export const post: IBundleLinkCollectionOption = {
  collection: () => PostsCollection,
  field: "postId",
};

export const user: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "userId",
};
