import React from 'react';
import styles from "./App.module.css";
import Header from './components/Header';
// import League from "./components/Leagues";
import Router from './Router';

const App = () => {
    return (
        <div className={styles.bg}  >
            <div className={styles.app} ><Header /></div>
            <Router >
            </Router>
        </div>


    );
};

export default App;