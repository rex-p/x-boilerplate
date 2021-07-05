import { kernel } from "../startup/kernel";
import "../startup/bundles";
import "../startup/env";

const container = kernel.container;

export { container, kernel };

export async function createEcosystem() {
  await kernel.init();
}

beforeAll(async () => {
  await createEcosystem();
});

afterAll(async () => {
  // This will call shutdown() on all bundles
  // This is useful when you want to stop db connections or server loops
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      kernel.shutdown().then(() => {
        resolve();
      });
    }, 500);
  });
});
