import api from './api';
import { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const Checkout = () => {
    const name = useSelector((store) => store.ui.info.name);
    const email = useSelector((store) => store.ui.info.email);
    const items = useSelector((store) => store.food.items);
    const [userCheckout, setUserCheckout] = useState({
        contact: "",
        address: ""
    });
    const location = useLocation();
    const history = useHistory();

    const handleChange = (event) => {
        const value = event.target.value;
        setUserCheckout({
            ...userCheckout,
            [event.target.name]: value
        });
    } 

    const handleSubmit = async (e, tItems, tPrice) => {
        e.preventDefault();
        try {
            await api.post('/order', {
                Total_Items: tItems,
                Total_Price: tPrice,
                Items: items,
                Customer: {
                    number: parseInt(userCheckout.contact, 10),
                    address: userCheckout.address,
                    name,
                    email,
                }
            });
            alert('Your Order has been placed. Now redirecting to Homepage...')
            setTimeout(() => {
                history.push('/');
            }, 1000);
        }
        catch(err) {
            console.log(err.message)
        }
    } 

    return ( 
        <>
            <h1 className='order-title'>Checkout</h1>
            <div className='order-container'>
                <div className='order-summary'>
                    <h3>Order Summary</h3>
                    <h4>Total Items: {location.state.totalitems}</h4>
                    <h4>Total Price: Rs {location.state.totalprice}</h4>
                </div> 
                <div className='order-form'>
                    <label htmlFor="contact">Contact Info</label>
                    <input type="text" name="contact" placeholder='Enter your Contact' required onChange={handleChange} />
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" placeholder='Enter your Address' required onChange={handleChange} />
                    <h4 className='payment'>Only Payment by Cash is Accepted</h4>
                    <button onClick={(e) => handleSubmit(e, location.state.totalitems, location.state.totalprice)} 
                    className='set order-btn'>Place Order</button>
                </div>
            </div> 
        </>
     );
}
 
export default Checkout;