import { IReducerOption } from "@kaviar/nova";
import { PermissionService } from "@kaviar/security-bundle";
import { APP_DOMAIN } from "../../constants";

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

export const roles: IReducerOption = {
  dependency: {
    _id: 1,
  },
  async reduce(user, { context }) {
    const permissionService: PermissionService = context.container.get(
      PermissionService
    );
    const permissions = await permissionService.findPermissions({
      domain: APP_DOMAIN,
      userId: user._id,
    });

    return permissions.map((permission) => permission.permission);
  },
};
