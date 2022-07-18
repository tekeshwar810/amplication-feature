import { Credentials } from "../../auth/Credentials";
import { UserInfo } from "../../auth/UserInfo";

export const TEST_USER: UserInfo = { id:'121',username:'admin',email: "test@gmail.com",roles: ["User"]  };
export const SIGN_TOKEN = "SIGN_TOKEN";
export const VALID_CREDENTIALS: Credentials = {
  email: "Valid User",
  password: "Valid User Password",
};
export const INVALID_CREDENTIALS: Credentials = {
  email: "Invalid User",
  password: "Invalid User Password",
};
