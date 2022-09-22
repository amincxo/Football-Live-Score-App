import React from 'react';
import styles from "./LiveMatch.module.css"


const LiveMatch = (props) => {
    return (
        <div>
            <div className={styles.card} style={{backgroundImage: `url(${props.cardWallpaper})`}} >
                <div className={styles.cardFilter} >
                    <p className={styles.leagueName} >{props.leagueName}</p>
                    <p className={styles.week} >{props.week}</p>
                    <div className={styles.score} >
                        <img className={styles.logo} src={props.homeLogo} style={{width: props.homeWidth , margin: props.homeMargin}}  alt="Home logo" />
                        <p className={styles.numScore} >{props.homeScore}</p>
                        <p className={styles.numScore} >:</p>
                        <p className={styles.numScore} >{props.awayScore}</p>
                        <img className={styles.logo} src={props.awayLogo} style={{width: props.awayWidth , margin: props.awayMargin}}  alt="away logo" />
                    </div>
                    <div className={styles.detail} >
                        <div className={styles.teamName}  >
                            <p>{props.home}</p>
                            <p>Home</p>
                        </div>
                        <div className={styles.liveTime} >
                            <div>{props.liveTime}</div>
                        </div>
                        <div className={styles.teamName}  >
                            <p>{props.away}</p>
                            <p>Away</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveMatch;