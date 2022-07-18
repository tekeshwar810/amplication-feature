/* eslint-disable import/no-unresolved */
import { JwtService } from "@nestjs/jwt";
import { mock } from "jest-mock-extended";
//@ts-ignore
import { TokenServiceBase } from "../../auth/base/token.service.base";
import {
  INVALID_PASSWORD_ERROR,
  INVALID_email_ERROR,
  //@ts-ignore
} from "../../auth/constants";
//@ts-ignore
import { SIGN_TOKEN, VALID_CREDENTIALS } from "./constants";

describe("Testing the TokenServiceBase", () => {
  let tokenServiceBase: TokenServiceBase;
  const jwtService = mock<JwtService>();
  beforeEach(() => {
    tokenServiceBase = new TokenServiceBase(jwtService);
    jwtService.signAsync.mockClear();
  });
  describe("Testing the BasicTokenService.createToken()", () => {
    it("should create valid token for valid email and password", async () => {
      jwtService.signAsync.mockReturnValue(Promise.resolve(SIGN_TOKEN));
      expect(
        await tokenServiceBase.createToken(
          VALID_CREDENTIALS.email,
          VALID_CREDENTIALS.password
        )
      ).toBe(SIGN_TOKEN);
    });
    it("should reject when email missing", () => {
      const result = tokenServiceBase.createToken(
        //@ts-ignore
        null,
        VALID_CREDENTIALS.password
      );
      return expect(result).rejects.toBe(INVALID_email_ERROR);
    });
    it("should reject when password missing", () => {
      const result = tokenServiceBase.createToken(
        VALID_CREDENTIALS.email,
        //@ts-ignore
        null
      );
      return expect(result).rejects.toBe(INVALID_PASSWORD_ERROR);
    });
  });
});
