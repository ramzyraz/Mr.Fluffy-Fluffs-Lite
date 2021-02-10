import useFetch from './useFetch';
import { useHistory } from "react-router-dom";

const Recipes = () => {
    const {data, isLoading, error} = useFetch('/recipes');
    let history = useHistory();
    
    const handleClick = (recipe) => {
        history.push({
            pathname: '/sidebar',
            recipes: {
                image: recipe.image,
                name: recipe.name,
                des: recipe.description,
                price: recipe.price
            },
          });
    }

    return ( 
        <>
        <ul className="collection">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data ? 
                data.map(recipe => (
                    <div key={recipe._id} className="single" onClick={() => handleClick(recipe)}>
                        <img src={recipe.image} alt="Pancake Images" />
                        <h2 className='name'>{ recipe.name }</h2>
                        <p className='des'>{ recipe.description }</p>
                        <p className='price'>RS { recipe.price }</p>
                    </div>
                ))
            : <div>PLEASE LOGIN FIRST TO SEE THE MENU</div>}
        </ul>
        </>
     );
}
 
export default Recipes