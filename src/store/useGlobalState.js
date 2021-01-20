import { useState } from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({
        name: '',
        loaded: false,
    });

    const actions = (action) => {
        switch (action.type) {
            case 'setState':
                return setState({ ...state, name: action.payload.name, loaded: action.payload.loaded })
            default:
                return state;
        }
    }

    return {state, actions}
}

export default useGlobalState;