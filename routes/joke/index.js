'use strict'

const getJokes = require("../../services/jokes")

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply)  {
    return getJokes(fastify);
  });
}
