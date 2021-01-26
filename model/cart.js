const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CartSchema = new schema({
    _id: schema.Types.ObjectId,
	Total_Items: Number,
    Total_Price: Number,
    Items: [{
        pancakes: {
            type: schema.Types.ObjectId,
            ref: 'recipes'
        },
        toppings: {
            type: schema.Types.ObjectId,
            ref: 'Topping'
        },
    }],
    Customer: {
        type: schema.Types.ObjectId,
        ref: 'Userbase'
    }
});

module.exports = mongoose.model('Cart', CartSchema);