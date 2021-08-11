import * as X from "@kaviar/x-bundle";
import { PostsCollection } from "../../../collections/Posts/Posts.collection";
import { PermissionService } from "@kaviar/security-bundle";
import { APP_DOMAIN } from "../../../constants";

export default {
  Query: [
    [],
    {
      postsFindOne: [X.ToNovaOne(PostsCollection)],
      postsFind: [
        async function (parent, args, context, info) {
          const permissionService: PermissionService = context.container.get(
            PermissionService
          );
          const isAdmin = await permissionService.has({
            domain: APP_DOMAIN,
            userId: context.userId,
            permission:["ADMIN"]
          });
          console.log({permissions: isAdmin})
          if (isAdmin) {
            return X.ToNova(PostsCollection)(parent, args, context, info);
          } else {
            throw new Error('Non-admin users are not permitted');
          }
      }],
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
