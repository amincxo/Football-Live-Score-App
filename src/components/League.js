import React from 'react';
import styles from "./League.module.css"
import Card from './Card';
import premierLeague from "../images/premierLeague.svg"
import LaLiga from "../images/LaLiga.png"
import seriaA from "../images/serieA.svg"
import bundesliga from  "../images/bundesliga.svg"
import ligue1 from "../images/ligue1.svg"

const League = () => {

    return (
        <div className={styles.box} >
            <Card page="/PremierLeage" logo={premierLeague} league="Premier League"/>
            <Card page="/La-Liga" logo={LaLiga} league="La Liga"/>
            <Card page="/Serie-A" logo={seriaA} league="Serie A"/>
            <Card  page="/Bundesliga" logo={bundesliga} league="Bundesliga"/>
            <Card size="18px" page="/Ligue-1" logo={ligue1} league="Ligue 1"/>
        </div>
    );
};

export default League;