import { Link } from 'react-router-dom';
import Fluffy from '../assets/pancake1.png';

const Home = () => {
    return ( 
        <header>
            <div className="imgs">
                <img src={Fluffy} alt="Fluffy Logo" />
            </div>
            <div className="header">
                <h2>Mr. Fluffy Fluffs Recipes</h2>
                <h3>Pancake Manzania</h3>
                <Link to='/recipes' className='btn'>View Recipes</Link>
            </div>
        </header>
     );
}
 
export default Home;