import useFetch from './useFetch';

const Recipes = () => {
    const {data, isLoading, error} = useFetch('/recipes');

    return ( 
        <>
        <ul className="collection">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {data ? 
                data.map(recipe => (
                    <div key={recipe._id} className="single">
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