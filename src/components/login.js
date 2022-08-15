import api from './api';
import { useState } from  'react';
import { useHistory } from "react-router-dom";
import { useDispatch  } from 'react-redux';
import { logActions } from '../redux/ui/ui_actions';

const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });
    
    const handleChange = (event) => {
        const value = event.target.value;
        setUserLogin({
            ...userLogin,
            [event.target.name]: value
        });
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await api.post('/login', userLogin);
            dispatch(logActions({
                name: result.data.user.name,
                email: result.data.user.email,
                loaded: true,
            }));
            history.push('/');
        }
        catch(err) {
            console.log(err.message)
        }
    } 
       
    return ( 
        <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required onChange={handleChange} />
            <div className="email error"></div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required onChange={handleChange} autoComplete="on"/>
            <div className="password error"></div>
            <button>LOGIN</button>
        </form>
     );
}
 
export default Login;