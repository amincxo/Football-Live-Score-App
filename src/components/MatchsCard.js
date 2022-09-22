import React from 'react';
import styles from './MatchsCard.module.css';


const MatchsCard = (props) => {
    return (
        <div className={styles.card} >
            <div className={styles.homeTeam}>
                <p name='homeName' >{props.homeName}</p>
                <img className={styles.homeTeamIMG} src={props.homeLogo} alt="homeLogo" />             
            </div>
            <div className={styles.matchTime} >
                <time name='startTime' >{props.matchTime}</time>
                <p name='dateTime'>{props.matchDate}</p>
            </div>
            <div className={styles.awayTeam} >
                <img className={styles.awayTeamIMG} src={props.awayLogo} alt="awayLogo" />
                <p name='awayName' > {props.awayName}</p>
            </div>
        </div>
    );
};

export default MatchsCard;

