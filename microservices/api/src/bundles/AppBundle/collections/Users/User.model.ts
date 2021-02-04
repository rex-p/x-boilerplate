import { IPasswordAuthenticationStrategy } from "@kaviar/password-bundle";
import { IUser, IUserProfile } from "@kaviar/security-bundle";

export class User implements IUser {
  _id: any;

  isEnabled: boolean;
  createdAt: Date;
  password: IPasswordAuthenticationStrategy;
  profile: IUserProfile;
  email: string;
}
