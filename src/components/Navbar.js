import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import UserContext from '../store/UserContext';
import api from './api';

const NavBar = () => {
    const { state, actions } = useContext(UserContext);
    console.log(state.name);
    let history = useHistory();
    const myUrl = '/logout';

    const logMeOut = async () => {
        try {
            await api.get(myUrl);
            actions({
                type: 'setState',
                payload: false
            })
            history.push('/');
        }
        catch(error) {
            console.log(error);
        }
    }       

    return ( 
        <nav>
            <h1><Link to='/'>Mr. Fluffy Fluffs</Link></h1>
            <ul>
                {state.loaded ? <>
                    <li>Welcome, {state.name}</li>
                    <li className='set point' onClick={logMeOut}>Log Out</li> 
                </> :
                <>
                    <li><Link to="/login" className='set'>Log In</Link></li>
                    <li><Link to="/signup" className='set btn up'>Sign Up</Link></li>                
                </>}
            </ul>
        </nav>
     );
}
 
export default NavBar;