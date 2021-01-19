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
    // const [errorSignUp, setErrorSignUp] = useState({ 
    //     email: "", 
    //     password: "" 
    // });
    
    // const errorEmailRef = useRef(null);
    // const errorPasswordRef = useRef(null);

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
            {/* {errors.name && <div>{errors.name}</div>} */}
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required onChange={handleChange} />
            {/* {errors.email && <div>{errors.email}</div>} */}
            {/* <div className="email error" ref={errorEmailRef}></div> */}
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required onChange={handleChange} />
            {/* <div className="password error" ref={errorPasswordRef}></div> */}
            {/* {errors.password && <div>{errors.password}</div>} */}
            <button>Sign Up</button>
            {/* <button onClick={() => {
                console.log(errorEmailRef.current.innerText);
            }}>Emailer</button>
            <button onClick={() => {
                console.log(errorPasswordRef.current.innerText);
            }}>Passworder</button> */}
        </form>
     );
}
 
export default Register;