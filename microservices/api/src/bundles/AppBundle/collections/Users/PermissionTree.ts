import { Roles } from "./enums/Roles.enum";


export const PermissionTree = {
  [Roles.ADMIN]: {
    [Roles.USER]: 1,
    [Roles.POST_MANAGER]: 1,
  },
  [Roles.USER]: 1,
  [Roles.POST_MANAGER]: 1,
};
