import * as X from "@kaviar/x-bundle";
import { PostsCollection } from "../../../collections/Posts/Posts.collection";

export default {
  Query: [
    [],
    {
      postsFindOne: [X.ToNovaOne(PostsCollection)],
      postsFind: [X.ToNova(PostsCollection)],
      postsCount: [X.ToCollectionCount(PostsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      postsInsertOne: [
        X.ToDocumentInsert(PostsCollection),
        X.ToNovaByResultID(PostsCollection),
      ],
      postsUpdateOne: [
        X.CheckDocumentExists(PostsCollection),
        X.ToDocumentUpdateByID(PostsCollection),
        X.ToNovaByResultID(PostsCollection),
      ],
      postsDeleteOne: [
        X.CheckDocumentExists(PostsCollection),
        X.ToDocumentDeleteByID(PostsCollection),
        X.ToNovaByResultID(PostsCollection),
      ],
    },
  ],
};
