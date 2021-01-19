import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import api from './api';

const NavBar = () => {
    let history = useHistory();
    const myUrl = '/logout';

    const logMeOut = async () => {
        try {
            await api.get(myUrl);
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
                <li><Link to="/login" className='set'>Log In</Link></li>
                <li><Link to="/signup" className='set btn up'>Sign Up</Link></li>
                {/* <li>Welcome</li> */}
                <li className='set point' onClick={logMeOut}>Log Out</li> 
            </ul>
        </nav>
     );
}
 
export default NavBar;