import React from 'react';
import styles from "./LiveMatch.module.css"
import chelsea from "../images/chelsea.svg"
import newCastle from "../images/newcastle.svg" 

const LiveMatch = () => {
    return (
        <div>
            <div className={styles.card} >
                <p className={styles.leagueName} >اسم لیگ</p>
                <p className={styles.week} >هفته سوم</p>
                <div className={styles.score} >
                    <img className={styles.logo} src={chelsea} alt="Home logo" />
                    <p className={styles.numScore} >1</p>
                    <p className={styles.numScore} >:</p>
                    <p className={styles.numScore} >0</p>
                    <img className={styles.logo} src={newCastle} alt="away logo" />
                </div>
            </div>
        </div>
    );
};

export default LiveMatch;