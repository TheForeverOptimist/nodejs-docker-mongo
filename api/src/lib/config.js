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
};
