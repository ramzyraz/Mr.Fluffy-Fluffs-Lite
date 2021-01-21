const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RecipeSchema = new schema({
    _id: schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('recipes', RecipeSchema);