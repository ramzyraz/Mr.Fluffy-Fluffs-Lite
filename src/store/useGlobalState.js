import { useState } from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({
        name: '',
        loaded: false,
    });

    const actions = (action) => {
        switch (action.type) {
            case 'setName':
                return setState({ ...state, name: action.payload })
            case 'setState':
                return setState({ ...state, loaded: action.payload })
            default:
                return state;
        }
    }

    return {state, actions}
}

export default useGlobalState;