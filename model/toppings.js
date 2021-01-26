const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ToppingsSchema = new schema({
    _id: schema.Types.ObjectId,
    name: String,
    price: Number,
});

module.exports = mongoose.model('Topping', ToppingsSchema);