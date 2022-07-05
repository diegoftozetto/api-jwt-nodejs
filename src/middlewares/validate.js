const Joi = require('joi');

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (!error) {
      next();
    } else {
      const { details } = error;
      const message = details.map(detail => detail.message).join(',')

      res.status(400).json({ error: message });
    }
  }
}

module.exports = validate;
