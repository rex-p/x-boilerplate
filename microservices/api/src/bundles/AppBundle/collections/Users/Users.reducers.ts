import { IReducerOption } from "@kaviar/nova";

// Export link names as constants with type of: BundleLinkCollectionOption, sample:
// export const company: IReducerOption = { ... }
export const email: IReducerOption = {
  dependency: {
    password: {
      email: 1,
    },
  },
  reduce(user) {
    return user?.password?.email;
  },
};
