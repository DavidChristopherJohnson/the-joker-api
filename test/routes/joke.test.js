'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('joke is loaded', async (t) => {
  const app = await build(t)

  const res = await app.inject({
    url: '/joke'
  })
  t.equal(res.payload, {
    setup: 'Why did the chicken cross the road',
    punchline: 'To get to the other side'
  })
})

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = await build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })
