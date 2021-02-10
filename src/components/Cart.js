import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/food/food_actions';
import DeleteImg from '../assets/Delete.svg';

const Cart = () => {
    const items = useSelector((store) => store.food.items);
    const dispatch = useDispatch();
    const removeItem = (pancakename, toppingsname) => {
        dispatch(removeFromCart({
            pancakes: {
                name: pancakename
            },
            toppings: {
                name: toppingsname
            }
        }));
    }
    const Toppings = (myitem) => {
        let mytoppings = []
        myitem.toppings.name.forEach(nameOfTime => 
            nameOfTime.length > 6 
            ? mytoppings.push(nameOfTime.substring(0, 6))
            : 
            mytoppings.push(nameOfTime)
        );
        return mytoppings;
    }
    const calculateToppingsPrice = (myitem) => {
        let sum = 0
         myitem.toppings.price.forEach(p => {
            sum += p;
        });
        return sum;
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        items.forEach(item => {
            totalPrice += item.pancakes.price + calculateToppingsPrice(item);
        });
        return totalPrice;
    }
    return ( 
        <>
            <h1 className='cart-title'>My Cart</h1>
            <div className='cart'>
                <div className='cart-elems'>
                {items.length > 0 
                ?
                items.map(item => (
                    <div className='cart-container' key={item.toppings.price + item.length + item.pancakes.price + Math.floor(Math.random() * 10)}> 
                        <img src={item.pancakes.img} alt={item.pancakes.name} className='cart-item-img' />
                        <div className='cart-items'>
                            <h3 className='cart-name'>{item.pancakes.name}</h3>
                            <div className='mytops'>{Toppings(item).join(' ')}</div>
                            <h4 className='cart-price'>Rs {item.pancakes.price + calculateToppingsPrice(item)}</h4>
                        </div>
                        <div className='myactions'>
                            <button onClick={() => removeItem(item.pancakes.name, item.toppings.name)} className='remove-btn'>
                                <img src={DeleteImg} alt={'Remove Item'} />
                            </button>
                        </div>
                    </div>
                )) 
                : <div className='empty-cart'>Cart is Empty!</div>}
                </div>
                <div className='summary'>
                    <h4 className='summary-title'>Cart Summary</h4>
                    <div>
                        <span className='total-items'>Total Items: {items.length}</span>
                        <span className='total-price'>Total Price: Rs {getTotalPrice()}</span>
                    </div>
                    <Link to={{ pathname: '/checkout', state: { totalitems: items.length, totalprice: getTotalPrice() } }} 
                    className='set btn checkout-btn'>Proceed to Checkout</Link>
                </div>
            </div>
        </>
     );
}
 
export default Cart;