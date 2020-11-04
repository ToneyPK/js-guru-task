import Joi from 'joi'

// ensuring that the request body has a proper structure and types od data
export default {
  authUser: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().min(3).max(10).required(),
    },
  },
}
