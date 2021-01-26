const express = require('express');
const topsController = require('../controllers/topscontroller');
const topsRouter = express.Router();

topsRouter.get('/toppings', topsController.getTops);

module.exports = topsRouter;