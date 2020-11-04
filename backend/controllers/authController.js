import usersJson from '../db/user.js'
import jsontWebToken from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'

// controller function that authenticates the user and serves a JWT token if the user is found in the 'database'
export const authenticate = (req, res) => {
  try {
    const secretKeyDecoded = Buffer.from(SECRET_KEY, 'base64')

    if (checkIfUserExists(req.body.email, req.body.password))
      jsontWebToken.sign(
        { usersJson },
        secretKeyDecoded,
        (err, token) => {
          res.json({ token })
          if (err) res.json(err)
        },
        {
          expiresIn: '1d',
        }
      )
    else res.json('User not found.')
  } catch (error) {
    res.json(error)
  }
}

// acts as a dummy query to a database which returns the desired user
const checkIfUserExists = (email, password) => {
  const decryptedPassword = Buffer.from(usersJson.password, 'base64').toString(
    'ascii'
  )
  return usersJson.email == email && decryptedPassword == password
}
