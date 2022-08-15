import api from './api';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Register = () => {
    let history = useHistory();
    const [userSignUp, setUserSignUp] = useState({ 
        name: "", 
        email: "", 
        password: "" 
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setUserSignUp({
            ...userSignUp,
            [event.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/signup', userSignUp);
            history.push('/login');
        }
        catch(err) {
            console.log(err.message)
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required onChange={handleChange} autoComplete="on"/>
            <button>Sign Up</button>
        </form>
     );
}
 
export default Register;