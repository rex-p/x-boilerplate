import * as _ from "lodash";
import { Service, Inject, ContainerInstance } from "@kaviar/core";
import { PostsCollection } from "../collections/Posts/Posts.collection";
import { UsersCollection } from "../collections/Users/Users.collection";
import { CommentsCollection } from "../collections/Comments/Comments.collection";
import { TagsCollection } from "../collections/Tags/Tags.collection";

const COUNT = 20;
const COMMENTS_COUNT = 5;

@Service()
export class PostsFixture {
  @Inject()
  container: ContainerInstance;

  async init() {
    if (!(await this.shouldRun())) {
      return;
    }

    const postsCollection = this.getPostsCollection();
    const commentsCollection = this.container.get(CommentsCollection);

    console.log(`[fixtures] Running posts fixtures.`);

    const users = await this.container.get(UsersCollection).find({}).toArray();
    const tags = await this.container.get(TagsCollection).find({}).toArray();

    if (tags.length === 0) {
      throw "[fixtures] Cannot load fixtures, no tags found.";
    }

    for (let i = 0; i < COUNT; i++) {
      const randomTagIdx = _.random(tags.length - 1);
      const randomTag = tags[randomTagIdx];

      let randomUserIdx = _.random(users.length - 1);
      let randomUser = users[randomUserIdx];

      const result = await postsCollection.insertOne({
        title: `Hello Post ${i}`,
        userId: randomUser._id,
        tagIds: [randomTag._id],
      });

      const postId = result.insertedId;
      for (let i = 0; i < COMMENTS_COUNT; i++) {
        let randomUserIdx = _.random(users.length - 1);
        let randomUser = users[randomUserIdx];

        await commentsCollection.insertOne({
          content: `Hello ${i}! Glad to see you here.`,
          postId,
          userId: randomUser?._id,
        });
      }
    }

    console.log(`[fixtures] Completed posts fixtures.`);
  }

  getPostsCollection(): PostsCollection {
    return this.container.get(PostsCollection);
  }

  getCommentsCollection(): CommentsCollection {
    return this.container.get(CommentsCollection);
  }

  async shouldRun() {
    if (process.env.NODE_ENV === "test") {
      return false;
    }
    // await this.getPostsCollection().deleteMany({});
    // await this.getCommentsCollection().deleteMany({});
    return (await this.getPostsCollection().find().count()) === 0;
  }
}
