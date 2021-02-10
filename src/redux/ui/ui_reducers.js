
const initialState = {
    info: {
        name: '',
        email: '',
        loaded: false,    
    },
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_STATE':
            return {
                ...state,
                info: {
                    ...state.info,
                    name: action.payload.name,
                    email: action.payload.email, 
                    loaded: action.payload.loaded,    
                }
            };
        default:
            return state;
    }
}

export default uiReducer;