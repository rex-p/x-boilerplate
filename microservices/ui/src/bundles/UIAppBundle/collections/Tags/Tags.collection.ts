import { Collection } from "@kaviar/x-ui";
import { Tag } from "@root/api.types";
import { ObjectId } from "@kaviar/ejson";

export class TagsCollection extends Collection<Tag> {
  getName() {
    return "tags";
  }

  getTransformMap() {
    return {
      _id: (v: string) => new ObjectId(v),
    };
  }
}
