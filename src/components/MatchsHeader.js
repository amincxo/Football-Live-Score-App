import React from 'react';
import styles from "./MatchsHeader.module.css"

const MatchsHeader = () => {
    return (
        <div className={styles.box} >
            <p className={styles.title} >مسابقه ها</p>
            <p className={styles.more} >مشاهده همه </p>
        </div>
    );
};

export default MatchsHeader;