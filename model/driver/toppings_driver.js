const ToppingsSchema = require('../toppings');

const InsertToppings = async (req,res,next) => {
    try {
        const data = [
        {
            name: 'Nutella',
            price: 20
        },
        {
            name: 'Maple Syrup',
            price: 20
        },
        {
            name: 'Creame',
            price: 20
        },
        {
            name: 'Chocolate Chips',
            price: 30
        },
        {
            name: 'White Chocolate Chips',
            price: 30
        },
      ];
      let saveTops = await ToppingsSchema.insertMany(data); //when fail its goes to catch
      return res.send(saveTops)
    } catch (error) {
      console.log(error);
      return res.status(400).send(error)
    }
  }

  module.exports = InsertToppings;