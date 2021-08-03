import { PassportAuthenticator } from "@kaviar/apollo-security-bundle";
import * as passport from "passport";
import { Strategy as localStrategy } from "passport-local";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import fetch from 'node-fetch';
const globalAny: any = global;
import env from "../../../../startup/env";


export class AwsCognitoAuthenticator extends PassportAuthenticator {
  route() {

    this.app.post('/auth/cognito', async (req, res, next) => {
      passport.authenticate('local',
        async (err, user, info) => {
          try {
            if (err || !user) {
              console.log("An error occurred", err)
              return next(err);
            }
            return res.json(user);

          }
          catch (error) {
            console.log("An error occurred", error)
            next(error);
          }
        }
      )(req, res, next);
    }
    );
  }

  get name() {
    return 'cognito';
  }

  createStrategy() {
    globalAny.fetch = fetch
    console.log({xx:env.USER_POOL_ID})
    const poolData = {
      UserPoolId: env.USER_POOL_ID,
      ClientId: env.CLIENT_ID
    };
    const pool_region = env.POOL_REGION;
    const userPool = new CognitoUserPool(poolData);
    return new localStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      },
      async (userName, password, done) => {
        try {
          var authenticationDetails = new AuthenticationDetails({
            Username: userName,
            Password: password
          });
          var userData = {
            Username: userName,
            Pool: userPool
          }
          var cognitoUser = new CognitoUser(userData);
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
              console.log(result);
              var accessToken = result.getAccessToken().getJwtToken();
              var refreshToken = result.getRefreshToken().getToken();
              var idToken = result.getIdToken().getJwtToken();

              done(null, { accessToken, refreshToken, idToken }, { message: 'Logged in Successfully' });
            },
            onFailure: (function (err) {
              console.log(">>>>>>>", err);
              done(err, false, { message: 'User not found' });
            })
          })
        } catch (error) {
          return done(error);
        }
      }
    )
  }
}
