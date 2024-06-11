export default {
  port: process.env.PORT || 3000,

  //REST API Config
  api: {
    prefix: "/api",
  },
  //Switch routes on/off
  routes: {
    default: true,
    users: true,
  },
  mongo: {
    protocol: process.env.MONGO_PROTOCOL,
    username: process.env.MONGO_DB_USERNAME,
    password: process.env.MONGO_DB_PASSWORD,
    database: process.env.MONGO_DB_NAME,
    url: process.env.MONGO_URL
  }
};
