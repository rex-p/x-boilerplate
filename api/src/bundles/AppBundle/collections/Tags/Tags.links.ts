import { PostsCollection } from "../Posts/Posts.collection";
import { IBundleLinkCollectionOption } from "@kaviar/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const company: IBundleLinkCollectionOption = { ... }

export const posts: IBundleLinkCollectionOption = {
  collection: () => PostsCollection,
  many: true,
  inversedBy: "tags",
};
