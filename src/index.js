import reportWebVitals from './reportWebVitals';
import store from "./database/redux/redux-store";
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
// import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

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