import reportWebVitals from './reportWebVitals';
import store from "./database/redux/redux-store";
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
// import {initStore} from "./init";
// const initialState = {
//     newsList: [{id: 0, nameEvent: "net"}],
//     currentPage: 1,
//     newsPerPage: 2,
//     defaultNewNews: {name: "", date: "", country: "", city: "", author: "", description: "", organizer: "", status: 2},
//     newNews: {name: "", date: "", country: "", city: "", author: "", description: "", organizer: "", status: 2}
// }
// let test = {...initialState, newsList: initialState.newsList.slice().map(item=> ({...item})), newNews: {...initialState.newNews}};
// test.newsList[0].id = 1;
// test.currentPage = 2;
// test.newNews.name = "name";
// console.log(initialState);
const root = ReactDOM.createRoot(document.getElementById('root'));
// initStore(store);
export let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();
reportWebVitals();