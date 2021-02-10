import { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/food/food_actions';
import useFetch from './useFetch';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'

const SideBar = () => {
    const {data, isLoading, error} = useFetch('/toppings');
    const [checked, setChecked] = useState([]);
    const [toppingName, setToppingName] = useState([]);
    const [toppingPrice, setToppingPrice] = useState([]);
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const goBack = () => {
        history.push('/recipes');
    };
    const handleCheck = (event, value, price) => {
        const isSelected = event.target.checked;
        setChecked(checked.includes(value) ? checked.filter(c => c !== value) : [...checked, value]);
        if (isSelected) {
            setToppingName([
                ...toppingName,
                value
            ]);

            setToppingPrice([
                ...toppingPrice,
                price
            ]);
        }
    };
    const AddToCart = (img, name, price) => {
        dispatch(addToCart({
            pancakes: {
                name,
                price,
                img,
            },
            toppings: {
                name: toppingName,
                price: toppingPrice
            }
        }));
    };
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
                <h5>Select upto any 3</h5>
                {error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                {data ? 
                    data.map(topping => (
                        <div key={topping.name} className='toppings'>
                            {/* <div className='toppings-inside'> */}
                                <FormControl required component="fieldset" className='toppings-inside'>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox 
                                                onChange={(e) => handleCheck(e, topping.name, topping.price)} 
                                                checked={checked.includes(topping.name)} 
                                            />}
                                            label={topping.name}
                                        />
                                    </FormGroup>
                                </FormControl>
                            {/* </div> */}
                            <p className='topprice'>RS { topping.price }</p>
                        </div>
                    )) 
                    : <div>PLEASE WAIT! DATA IS LOADING</div>}
                    <div className='mybtns'>
                        <button className='cart-btn' onClick={goBack}>GO Back To Menu</button>
                        <button className='cart-btn' onClick={() => AddToCart(location.recipes.image, location.recipes.name, location.recipes.price)}>Add to Cart</button>
                    </div>
                </div>
        </div>
     );
}
 
export default SideBar;