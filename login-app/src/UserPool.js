import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-west-1_EDUJ90stM',
  ClientId: '6as7k5n0d0n41lq4sbu5fk54t5'
};

export default new CognitoUserPool(poolData);