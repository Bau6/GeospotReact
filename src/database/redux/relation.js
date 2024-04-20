export default (dispatch, action) => {
    switch (action.type) {
        case "Lol":
        case "lol":
            dispatch();
        default:
            dispatch(action);
            break;
    }
}