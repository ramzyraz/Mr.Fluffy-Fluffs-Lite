import { useState } from  'react';
import api from './api';
import { useHistory } from "react-router-dom";

const Login = () => {
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
            <input type="password" name="password" required onChange={handleChange} />
            <div className="password error"></div>
            <button>LOGIN</button>
        </form>
     );
}
 
export default Login;