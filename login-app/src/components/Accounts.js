import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

const AccountContext = createContext();

const Account = props => {
  const getSession = async () =>
    await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });

  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          console.log('onSuccess:', data);
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });

  const curentUser = () => {
    const user = Pool.getCurrentUser();
    return user

  }
  
  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      console.log('user for log out',user)
      user.signOut();
      console.log('user logged out')
      console.log('user after logout ',user)
    }
  }

  return (
    <AccountContext.Provider value={{
      authenticate,
      getSession,
      logout,
      curentUser
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };