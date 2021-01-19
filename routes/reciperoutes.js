const express = require('express');
const recipecontroller = require('../controllers/recipecontroller');
const { requireAuth, checkUser } = require('../config/auth');
const router = express.Router();

router.get('*', checkUser);
router.get('/recipes', requireAuth, recipecontroller.getRecipes);

module.exports = router;