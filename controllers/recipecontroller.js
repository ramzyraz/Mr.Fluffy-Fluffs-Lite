const RecipeSchema = require('../model/recipes');

module.exports.getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeSchema.find({});
        res.send(recipes);
    }
    catch(error) {
        console.log(error);
    }
}

