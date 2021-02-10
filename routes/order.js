const express = require('express');
const orderController = require('../controllers/ordercontroller');
const orderRouter = express.Router();

orderRouter.get('/order', orderController.getOrder);
orderRouter.post('/order', orderController.postOrder);

module.exports = orderRouter;