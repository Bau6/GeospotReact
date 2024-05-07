const SET_SESSION = "SET_SESSION";
const CLEAR_SESSION = "CLEAR_SESSION";
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const SET_ROLE = "SET_ROLE";

const initialState = {
    userID: null,
    isAuthenticated: false,
    role: null,
    dataLogin: {id: null, email: "", password: "", name:""}
};

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION:
            return {
                ...state,
                userID: action.payload,
                isAuthenticated: true
            };
        case CLEAR_SESSION:
            return {
                ...state,
                role: null,
                dataLogin: {id: null, email: "", password: ""},
                userID: null,
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
        case SET_ROLE:
            return {
                ...state,
                role: action.payload
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
export const setRoleActionCreator = (role) => ({
    type: SET_ROLE,
    payload: role
});


export default sessionReducer;