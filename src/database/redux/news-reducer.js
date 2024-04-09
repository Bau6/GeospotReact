const LOAD_NEWS = 'LOAD_NEWS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const NAME = 'NAME';
const DATE = 'DATE';
const COUNTRY = 'COUNTRY';
const CITY = 'CITY';
const AUTHOR = 'AUTHOR';
const DESCRIPTION = 'DESCRIPTION';
const IMAGE = 'IMAGE';
const ORGANIZER = 'ORGANIZER';
const DEFAULT_NEW_NEWS = 'DEFAULT_NEW_NEWS';
const UPDATE_NEW_LIST = 'UPDATE_NEW_LIST';

let initialState = {
    newsList: [{id: 0, nameEvent: "net"}],
    currentPage: 1,
    newsPerPage: 2,
    defaultNewNews: {name: "", date: "", country: "", city: "", author: "", description: "", organizer: "", status: 2},
    newNews: {name: "", date: "", country: "", city: "", author: "", description: "", organizer: "", status: 2}
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_NEWS:
            return {...state, newsList: action.payload};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};
        case NAME:
            return {...state, newNews: {...state.newNews, name: action.newText}};
        case ORGANIZER:
            return {...state, newNews: {...state.newNews, organizer: action.newText}};
        case DATE:
            return {...state, newNews: {...state.newNews, date: action.newText}};
        case COUNTRY:
            return {...state, newNews: {...state.newNews, country: action.newText}};
        case CITY:
            return {...state, newNews: {...state.newNews, city: action.newText}};
        case DESCRIPTION:
            return {...state, newNews: {...state.newNews, description: action.newText}};
        case AUTHOR:
            return {...state, newNews: {...state.newNews, author: action.newText}};
        case IMAGE:
            return {...state, newNews: {...state.newNews, image: action.newText}};
        case DEFAULT_NEW_NEWS:
            return {...state, newNews: {...state.defaultNewNews}};
        case UPDATE_NEW_LIST:
            return {...state,newsList: action.text}
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
export const onChangeActionCreator = (type, value) => ({
    type: type,
    newText: value
})
export const defaultNewNewsActionCreator = () => ({
    type: DEFAULT_NEW_NEWS
})
export const updateNewListActionCreator = (value) => ({
    type: UPDATE_NEW_LIST,
    text: value
})
export default newsReducer;