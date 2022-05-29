const fp = require("fastify-plugin");
 
module.exports = fp(async function (fastify, opts) {
  const mongo = require("@fastify/mongodb");
  
  fastify.register(mongo, {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,

    url: "mongodb://joker-user:j0k3r@localhost:27017/joker",
  });
});
