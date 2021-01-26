const CartSchema = require('../model/cart');

module.exports.getCart = async (req, res) => {
  try {
    const mycart = await CartSchema.find({});
    res.send(mycart);
  }
  catch(error) {
      console.log(error);
      res.status(400).json({ error });
  }
}