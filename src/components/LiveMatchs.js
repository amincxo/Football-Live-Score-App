import React from 'react';
import LiveMatch from './LiveMatch';
import styles from "./LiveMatchs.module.css"

const LiveMatchs = () => {
    return (
        <div >
            <p className={styles.title}>بازی های زنده</p> 
            <div className={styles.container} > 
                <LiveMatch />
                <LiveMatch />
                <LiveMatch />
            </div>
        </div>
    );
};

export default LiveMatchs;