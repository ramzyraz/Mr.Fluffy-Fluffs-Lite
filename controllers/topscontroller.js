const ToppingsSchema = require('../model/toppings');

module.exports.getTops = async (req, res) => {
  try {
    const tops = await ToppingsSchema.find({});
    res.send(tops);
  }
  catch(error) {
      console.log(error);
      res.status(400).json({ error });
  }
}