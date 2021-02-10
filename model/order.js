const mongoose = require('mongoose');
const schema = mongoose.Schema;

const OrderSchema = new schema({
    Date: Date,
	Total_Items: Number,
    Total_Price: Number,
    Items: [{
        pancakes: {
            name: String,
            price: Number,
            image: String,
        },
        toppings: {
            name: [String],
            price: [Number],
        },
    }],
    Customer: {
        number: {
            type: Number,
            required: [true, 'Please enter your number'],
        },
        address: {
            type: String,
            required: [true, 'Please enter an address'],
        },
        name: String,
        email: String,
    }
});

module.exports = mongoose.model('Order', OrderSchema);