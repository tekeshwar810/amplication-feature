import { Injectable, UnauthorizedException } from "@nestjs/common";
// @ts-ignore
// eslint-disable-next-line
import { UserService } from "../user/user.service";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { email:email },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { roles } = user;
      return { email, roles };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { email, password } = credentials;
    const user = await this.validateUser(
      credentials.email,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    //@ts-ignore
    const accessToken = await this.tokenService.createToken(email, password);
    const msg = {data:true}
    return {
      accessToken,
      ...user,
    };
  }
}
