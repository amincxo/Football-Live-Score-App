import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { BrowserRouter } from 'react-router-dom';
import styles from './index.module.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter >
        <React.StrictMode>
            <App className={styles.bg} />
        </React.StrictMode>
    </BrowserRouter>
);

