const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const initialState = {
    isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
export const login = () => {
    return {
        type: 'LOGIN',
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export default AuthReducer;