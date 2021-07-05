import { config } from "dotenv";
import { KernelContext } from "@kaviar/core";
import * as fs from "fs";

const path = process.env.NODE_ENV === "test" ? ".env.test" : ".env";

if (fs.existsSync(path)) {
  const result = config({
    path,
  });

  if (result.error) {
    console.error(result.error);
    process.exit(0);
  }
} else {
  console.warn(`There is no "${path}" variable configured`);
}

export default {
  APP_URL: process.env.APP_URL,
  ROOT_URL: process.env.ROOT_URL,
  ROOT_PORT: parseInt(process.env.PORT || process.env.ROOT_PORT),
  MONGO_URL: process.env.MONGO_URL,
  CONTEXT: (process.env.NODE_ENV as KernelContext) || KernelContext.DEVELOPMENT,
};
