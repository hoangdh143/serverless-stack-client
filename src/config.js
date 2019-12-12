const dev = {
  STRIPE_KEY: "pk_test_t9u5mqNyejuKVq9As4vIReji00Fk2Ofi8H",
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "notes-app-hoangdh"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://y2cxx76tml.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_nBNTDAzHD",
    APP_CLIENT_ID: "523tog2g1lgsc48krcab3p2lkv",
    IDENTITY_POOL_ID: "us-east-1:9047cde9-6a18-4958-ad85-043cb9cef212"
  }
};

const prod = {
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

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};