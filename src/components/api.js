import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fluffy-fluffs.herokuapp.com',
    withCredentials: true,    
});

export default instance;
