const Joi = require('joi');

const joiSchemas = {
  user: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    password_confirmation: Joi.any().equal(Joi.ref('password')).required()
  }),

  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};

module.exports = joiSchemas;
