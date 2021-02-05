import { Collection } from "@kaviar/x-ui";
import { Tag } from "./Tag.model";

export class TagsCollection extends Collection<Tag> {
  getName() {
    return "tags";
  }
}
