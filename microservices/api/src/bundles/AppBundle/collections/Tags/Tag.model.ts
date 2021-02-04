import { ObjectId } from "@kaviar/ejson";
import { Schema, Is, a, an } from "@kaviar/validator-bundle";

@Schema()
export class Tag {
  @Is(a.string().required())
  name: string;

  @Is(a.objectId().required())
  _id: any;
}
