import { PassportAuthenticator } from "@kaviar/apollo-security-bundle";
import * as passport from "passport";
import { Strategy as CognitoStrategy } from "passport-cognito";

export class AwsCognitoAuthenticator extends PassportAuthenticator {
  route() {
    this.app.post("/auth/cognito", passport.authenticate('cognito', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));
    // this.get("/auth/cognito/callback", {}, async (err, user, req, res, next) => {
    //   // create the token using the user._id
    //   const token = await this.getToken(user._id);
    //   res.cookie("kaviar-login-token", token);
    //   res.json({ hello: "goodbye ", token });
    // }
    // );
  }

  createStrategy() {
    return new CognitoStrategy({
      userPoolId: 'ap-south-1_rz9ATi0PU',
      clientId: '33hi099rqt9map6utf2iraribg',
      region: 'ap-south-1'
    },
      function (accessToken, idToken, refreshToken, user, done) {
        console.log({accessToken, idToken, refreshToken, user, done})
        process.nextTick(function () {
          done(null, user);
        });
      });
  }
}
