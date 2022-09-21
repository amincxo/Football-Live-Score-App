import React from 'react';
import styles from "./Leagues.module.css"
import League from './League';

const Leagues = () => {
    return (
        <div className={styles.container} >
            <League />
        </div>
    );
};

export default Leagues;