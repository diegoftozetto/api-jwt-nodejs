const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const ProductController = require('../controllers/product');

router.get('/', auth, ProductController.findAll);

module.exports = router;
