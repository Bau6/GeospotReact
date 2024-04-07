const LOAD_NEWS = 'LOAD_NEWS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let initialState = {
    newsList: [{id: 0, nameEvent: "net"}],
    currentPage: 1,
    newsPerPage: 2
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return { ...state, newsList: action.payload };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};
export const loadNews = (newsList) => ({
    type: LOAD_NEWS,
    payload: newsList
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: page
});
export default newsReducer;