import React from 'react';
import LiveMatch from './LiveMatch';
import styles from "./LiveMatchs.module.css"
import chelsea from "../images/chelsea.svg"
import newCastle from "../images/newcastle.png" 
import realMadrid from "../images/realMadrid.png"
import Barcelona from "../images/Barcelona.png"
import atalanta from "../images/atalanta.png"
import Napoli from "../images/Napoli.png"
import PremierLeagueWallpaper from "../images/PremierLeagueWallpaper.jpg"
import SerieAWallpaper from "../images/SerieAWallpaper.jpg"
import LaLigaWallpaper from "../images/LaLigaWallpaper.png"

const LiveMatchs = () => {
    return (
        <div >
            <p className={styles.title}>بازی های زنده</p> 
            <div className={styles.container} > 
                <LiveMatch home="چلسی" homeLogo={chelsea} homeScore="2" homeWidth="4.5rem" homeMargin=" 0.5rem 1.3rem 0 1.3rem" away="نیو کاسل" awayLogo={newCastle} awayScore="0" awayWidth="5rem" awayMargin="0 1.3rem" week="هفته دهم" leagueName="پریمیر لیگ" liveTime="65" cardWallpaper={PremierLeagueWallpaper} />
                <LiveMatch home="رئال مادرید" homeLogo={realMadrid} homeScore="5" homeWidth="3.6rem" homeMargin="0 1.3rem" away="بارسلونا" awayLogo={Barcelona} awayScore="1" awayWidth="4rem" awayMargin="0.9rem 1.3rem 0 1.3rem" week="هفته سوم" leagueName="لالیگا"liveTime="45" cardWallpaper={LaLigaWallpaper} />
                <LiveMatch home="آتالانتا " homeLogo={atalanta} homeScore="1" homeWidth="3.5rem" homeMargin="0 1.3rem"  away="ناپولی" awayLogo={Napoli} awayScore="3" awayWidth="7rem" awayMargin="0 0rem 0rem 0rem" week="هفته پنجم" leagueName="سری آ" liveTime="15" cardWallpaper={SerieAWallpaper} />
            </div>
        </div>
    );
};

export default LiveMatchs;