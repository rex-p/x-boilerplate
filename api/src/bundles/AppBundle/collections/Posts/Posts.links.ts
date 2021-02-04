import { TagsCollection } from "../Tags/Tags.collection";
import { UsersCollection } from "../Users/Users.collection";
import { CommentsCollection } from "../Comments/Comments.collection";
import { IBundleLinkCollectionOption } from "@kaviar/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const company: IBundleLinkCollectionOption = { ... }

export const comments: IBundleLinkCollectionOption = {
  collection: () => CommentsCollection,
  inversedBy: "post",
};

export const user: IBundleLinkCollectionOption = {
  collection: () => UsersCollection,
  field: "userId",
};

export const tags: IBundleLinkCollectionOption = {
  collection: () => TagsCollection,
  many: true,
  field: "tagIds",
};
