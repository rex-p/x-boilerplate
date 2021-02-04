import { Service, Inject, ContainerInstance } from "@kaviar/core";
import { TagsCollection } from "../collections/Tags/Tags.collection";

const TAGS = ["JS", "TS", "LOVE", "PASSION", "CODE"];

@Service()
export class TagsFixture {
  @Inject()
  container: ContainerInstance;

  async init() {
    if (!(await this.shouldRun())) {
      return;
    }

    const tagsCollection = this.getCollection();

    console.log(`Running tags fixtures.`);

    for (const tagName of TAGS) {
      await tagsCollection.insertOne({
        name: tagName,
      });
    }

    console.log(`Completed tags fixtures.`);
  }

  getCollection(): TagsCollection {
    return this.container.get(TagsCollection);
  }

  async shouldRun() {
    // await this.getCollection().deleteMany({});
    return (await this.getCollection().find().count()) === 0;
  }
}
