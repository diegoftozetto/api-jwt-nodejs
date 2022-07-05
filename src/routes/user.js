const express = require('express');
const router = express.Router();

const joiSchemas = require('../schemas');
const validate = require('../middlewares/validate');
const UserController = require('../controllers/user');

router.post('/create', validate(joiSchemas.user), UserController.create);
router.post('/login', validate(joiSchemas.login), UserController.login);

module.exports = router;
