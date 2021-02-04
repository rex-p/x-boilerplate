import { Collection, Behaviors } from "@kaviar/mongo-bundle";
import * as links from "./Tags.links";
import * as reducers from "./Tags.reducers";
import { Tag } from "./Tag.model";

export class TagsCollection extends Collection<Tag> {
  static collectionName = "tags";
  static model = Tag;

  static links = links;
  static reducers = reducers;

  static behaviors = [Behaviors.Timestampable(), Behaviors.Blameable()];

  // Create an array of indexes
  static indexes = [{ key: { createdAt: 1 } }, { key: { createdBy: 1 } }];
}
