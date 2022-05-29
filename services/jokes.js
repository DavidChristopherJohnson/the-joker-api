module.exports = (fastify) => fastify.mongo.db.collection('joker-test').find().toArray();
