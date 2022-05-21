'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return {
      setup: 'Why did the chicken cross the road',
      punchline: 'To get to the other side'
    }
  })
}
