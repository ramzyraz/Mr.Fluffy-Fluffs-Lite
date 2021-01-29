import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Carts from '../assets/carts.svg';
import api from './api';
import { logActions } from '../redux/ui/ui_actions';

const NavBar = () => {
    const name = useSelector((store) => store.ui.info.name);
    const loaded = useSelector((store) => store.ui.info.loaded);
    const dispatch = useDispatch();
    const count = 1;
    let history = useHistory();
    const myUrl = '/logout';

    const logMeOut = async () => {
        try {
            dispatch(logActions({
                name: '',
                loaded: false,
            }));
            history.push('/');
            await api.get(myUrl);
        }
        catch(error) {
            console.log(error);
        }
    }      
    
    return ( 
        <nav>
            <h1><Link to='/' className='title'>Mr. Fluffy Fluffs</Link></h1>
            <ul>
                {loaded ? <>
                    <li>Welcome, {name}</li>
                    <li className='set point' onClick={logMeOut}>Log Out</li>
                    <Link to='/cart' className='cart-img'>
                        <img src={Carts} alt='Shopping Cart' /> 
                        <p className="cart-counter">{ count }</p>
                    </Link>
                </> :
                <>
                    <li><Link to="/login" className='set'>Log In</Link></li>
                    <li><Link to="/signup" className='set btn up'>Sign Up</Link></li>                
                </>
                }
            </ul>
        </nav>
     );
}
 
export default NavBar;