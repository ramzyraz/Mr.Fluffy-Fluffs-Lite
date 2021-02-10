const OrderSchema = require('../model/order');

module.exports.getOrder = async (req, res) => {
  try {
    const mycart = await OrderSchema.find({});
    res.send(mycart);
  }
  catch(error) {
      console.log(error);
      res.status(400).json({ error });
  }
}

module.exports.postOrder = async (req, res) => {
  try {
    console.log(req.body);
    const userOrder = await OrderSchema.create(req.body);
    res.status(201).json({ userOrder });
  }
  catch(error) {
      console.log(error);
      res.status(400).json({ error });
  }
}