import { container } from "../../../__tests__/ecosystem";
import { AppBundle } from "../AppBundle";

test("Container", () => {
  const bundle = container.get(AppBundle);
  expect(bundle).toBeInstanceOf(AppBundle);
});
