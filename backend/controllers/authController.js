import usersJson from '../db/user.js'
import jsontWebToken from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'

export const authenticate = (req, res) => {
  try {
    if (checkIfUserExists(req.body.email, req.body.password))
      jsontWebToken.sign({ usersJson }, SECRET_KEY, (err, token) => {
        res.json({ token })
      })
  } catch (error) {
    res.json(error)
  }
}

const checkIfUserExists = (email, password) => {
  return usersJson.email == email && usersJson.password == password
}
