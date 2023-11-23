const express = require('express')

const app = express()

app.use((httpReq, httpRes) => {
  const method = httpReq.method.toUpperCase()
  const res = {
    path: httpReq.path,
    body: httpReq.body,
    query: httpReq.query
  }
  console.log(`${new Date()}`, method, res)
  httpRes.json({ method, ...res })
})

app.listen(9999, () => {
  console.log('app started')
})
