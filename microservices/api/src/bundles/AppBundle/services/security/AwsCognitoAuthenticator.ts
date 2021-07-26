import { PassportAuthenticator } from "@kaviar/apollo-security-bundle";
import * as passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import CognitoStrategy from 'passport-cognito'

export class AwsCognitoAuthenticator extends PassportAuthenticator {
  route() {
    this.app.get("/auth/cognito", passport.authenticate("cognito"));
    this.get(
      "/auth/cognito/callback",
      {},
      async (err, user, req, res, next) => {
        // create the token using the user._id
        const token = await this.getToken(user._id);
        res.cookie("kaviar-login-token", token);
        res.json({ hello: "goodbye ", token });
      }
    );
  }

  createStrategy() {
    return new CognitoStrategy({
      userPoolId: 'ap-northeast-1_eSjqLfqKc',
      clientId: 'vtvg02tr21zmxvspyvawtv09b',
      region: 'ap-northeast-1'
    },
      function (accessToken, idToken, refreshToken, user, done) {
        process.nextTick(function () {
          done(null, user);
        });
      });
  }
}
