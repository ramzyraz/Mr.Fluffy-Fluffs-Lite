const RecipeSchema = require('./recipes');

const InsertRecipes = async (req,res,next) => {
    try {
      const data = [
        {
            name: 'Fluffy Pancake',
            description: 'Your classic fluffy pancake',
            price: 100,
            image: '/images/fluffyPancake.jpg',
        },
        {
            name: 'Nutella Pancake',
            description: 'Fluffy pancakes filled with thick layer of creamy Nutella',
            price: 170,
            image: '/images/nutellaPancake.jpg',
        },  
        {
            name: 'Chocholate Chip Pancake',
            description: 'Ultra fluffy amd filled with chocolate chips',
            price: 120,
            image: '/images/chocchipPancake.jpg',
        },
        {
            name: 'White Chocolate Chip Pancake',
            description: 'The white chocolate chips take them to the next level',
            price: 120,
            image: '/images/ww.jpg',
        }
      ];
      let saveBlog = await RecipeSchema.insertMany(data); //when fail its goes to catch
      return res.send(saveBlog)
    } catch (error) {
      console.log(error);
      return res.status(400).send(error)
    }
  }

  module.exports = InsertRecipes;