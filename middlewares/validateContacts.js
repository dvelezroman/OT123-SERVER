const { checkSchema } = require('express-validator')

const validateName = checkSchema({
  name: {
    exists: true,
    isString: true,
    isLength: {
      options: { min: 3, max: 24 },
    },
    trim: true,
  },
})

const validateEmail = checkSchema({
  email: {
    exists: true,
    isEmail: true,
    isLength: {
      options: { min: 3, max: 24 },
    },
    trim: true,
  },
})

const validateContacts = [validateName, validateEmail]

module.exports = validateContacts
