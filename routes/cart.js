const express = require('express');
const cartController = require('../controllers/cartcontroller');
const cartRouter = express.Router();

cartRouter.get('/cart', cartController.getCart);

module.exports = cartRouter;