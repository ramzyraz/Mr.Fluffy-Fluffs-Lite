import { useHistory, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    const history = useHistory();
    const goBack = () => {
        history.push('/recipes');
    }
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
    ]
    return ( 
        <div className='sidebar-container'>
            <div className="outerset">
                <div className="innerset">
                    <img src={location.recipes.image} alt="Pancake Images" />
                    <h2 className='name'>{ location.recipes.name }</h2>
                    <p className='des'>{ location.recipes.des }</p>
                    <p className='price'>RS { location.recipes.price }</p>
                </div>
            </div>
            <div className='toppings-container'>
                <h3>Extra Toppings</h3>
                <h5>Select upto any 4</h5>
                {data ? 
                    data.map(topping => (
                        <div key={topping.name} className='toppings'>
                            <div className='toppings-inside'>
                                <input type="radio" name={topping.name} />
                                <label htmlFor={topping.name}>{ topping.name }</label>
                            </div>
                            <p className='topprice'>RS { topping.price }</p>
                        </div>
                    )) 
                    : <div>PLEASE WAIT! DATA IS LOADING</div>}
                    <div className='mybtns'>
                        <button className='cart-btn' onClick={goBack}>GO Back To Menu</button>
                        <button className='cart-btn'>Add to Cart</button>
                    </div>
                </div>
        </div>
     );
}
 
export default SideBar;