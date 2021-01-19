import FluffyPancake from '../assets/fluffyPancake.jpg';
import useFetch from './useFetch';

const Recipes = () => {

    const {data, isLoading, error} = useFetch('/recipes');

    return ( 
        <>
        <ul className="collection">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data.map(recipe => (
                <div key={recipe._id} className="single">
                    <img src={FluffyPancake} alt="fluffy pancake" />
                    <h2>{ recipe.name }</h2>
                    <p>{ recipe.description }</p>
                    <p>{ recipe.price }</p>
                </div>
            ))}
        </ul>
        </>
     );
}
 
export default Recipes