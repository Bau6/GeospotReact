const SET_SESSION = "SET_SESSION";
const CLEAR_SESSION = "CLEAR_SESSION";
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';

const initialState = {
    user: null,
    isAuthenticated: false,
    role: null,
    dataLogin: {email: "", password: ""}
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            };
        case CLEAR_SESSION:
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        case EMAIL:
            return {
                ...state,
                dataLogin: {
                    ...state.dataLogin,
                    email: action.newText
                }
            };
        case PASSWORD:
            return {
                ...state,
                dataLogin: {
                    ...state.dataLogin,
                    password: action.newText
                }
            };

        default:
            return state;
    }
};


export const setSessionActionCreator = (userData) => ({
    type: SET_SESSION,
    payload: userData
});

export const clearSessionActionCreator = () => ({
    type: CLEAR_SESSION
});

export const onEmailLoginActionCreator = (value) => (
    {
        type: EMAIL,
        newText: value
    }
)
export const onPassLoginActionCreator = (value) => (
    {
        type: PASSWORD,
        newText: value
    }
)


export default sessionReducer;