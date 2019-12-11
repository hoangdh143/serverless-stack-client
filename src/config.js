export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_t9u5mqNyejuKVq9As4vIReji00Fk2Ofi8H",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-hoangdh"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://8l0em6ifeh.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_h1b1fXQyr",
    APP_CLIENT_ID: "3prgeuanasp6gasmo8npebr36c",
    IDENTITY_POOL_ID: "ap-southeast-1:080119e8-941e-44c1-9bb5-b317ca16c271"
  }
};
