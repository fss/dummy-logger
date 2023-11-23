const express = require('express')

const app = express()

app.use((httpReq, httpRes) => {
  console.log(httpReq.method.toUpperCase(), {
    path: httpReq.path,
    body: httpReq.body,
    query: httpReq.query
  })
  httpRes.json({ OK: true })
})

app.listen(9999, () => {
  console.log('app started')
})
