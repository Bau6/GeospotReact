const USERS = 'USERS';
let initialState = {
    usersTourney: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, usersTourney: action.text}
        default:
            return state;
    }
}
export const usersLoadForTourney = (text) => ({
    type: USERS,
    text: text,
});

export default usersReducer;