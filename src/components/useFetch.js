import { useState, useEffect } from "react";
import api from './api';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
                setData(response.data);
                setIsLoading(false);
                setError(null);
            }
            catch(error) {
                setIsLoading(false);
                setError(error.message);
            }
        }       
        fetchData();    
    }, [url]);

    return {data, isLoading, error};
}
 
export default useFetch;