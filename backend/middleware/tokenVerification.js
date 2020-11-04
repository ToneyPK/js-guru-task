import express from 'express'

//middleware function that verifies the token from the request
const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization']

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]

    req.token = bearerToken

    next()
  } else res.send(403)
}

export default verifyToken
