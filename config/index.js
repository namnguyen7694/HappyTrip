require('dotenv').config();
let mongo_uri;
let secret_key;
let port;
let email;
let password;
let host;

switch (process.env.NODE_ENV) {
    case "local":
        mongo_uri = process.env.MONGO_LOCAL_URL;
        secret_key = process.env.SECRET_KEY_LOCAL;
        port = process.env.PORT_LOCAL;
        email = process.env.EMAIL_LOCAL;
        password = process.env.PASSWORD_LOCAL;
        host = `localhost:${port}`;
        break;
    case "staging":
        mongo_uri = process.env.MONGO_STAGING_URL;
        secret_key = process.env.SECRET_KEY_STAGING;
        port = process.env.PORT_LOCAL; //when run on local with mongodb cloud
        // port auto create on Heroku
        email = process.env.STAGING;
        password = process.env.PASSWORD_STAGING; 
        host = "vexere-happytrip.herokuapp.com" 
        break;

    default:
        break;
}

module.exports = {
    mongo_uri,
    secret_key,
    port,
    email,
    password,
    host
}