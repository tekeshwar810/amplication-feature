export type UserUpdateInput = {
  branches?: string | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
