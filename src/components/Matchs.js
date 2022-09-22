import React from 'react';
import MatchsCard from './MatchsCard';
import styles from "./Matchs.module.css"
import Arsenal from "../images/PermierLeague/Arsenal.png"
import Astonvila from "../images/PermierLeague/Astonvila.png"
import Bournemouth from "../images/PermierLeague/Bournemouth.png"
import Brentford from "../images/PermierLeague/Brentford.png"
import Brighton from "../images/PermierLeague/Brighton.png"
import Chelsea from "../images/PermierLeague/Chelsea.png"
import crystalPalace from "../images/PermierLeague/crystalPalace.png"
import Everton from "../images/PermierLeague/Everton.png"
import Folaham from "../images/PermierLeague/Folaham.png"
import leicesterCity from "../images/PermierLeague/leicesterCity.png"
import leedsUnited from "../images/PermierLeague/leedsUnited.png"
import liverPool from "../images/PermierLeague/liverPool.png"
import ManchesterCity from "../images/PermierLeague/ManchesterCity.png"
import ManchesterUnited from "../images/PermierLeague/ManchesterUnited.png"
import natihgham from "../images/PermierLeague/natihgham.png"
import newcastle from "../images/PermierLeague/newcastle.png"
import southampton from "../images/PermierLeague/southampton.png"
import tatenham from "../images/PermierLeague/tatenham.png"
import volverhampton from "../images/PermierLeague/volverhampton.png"
import westHam from "../images/PermierLeague/westHam.png"


const Matchs = () => {
    return (
        <div className={styles.menu} >
            <MatchsCard homeName="آرسنال" homeLogo={Arsenal} matchTime="17:30" matchDate="مهر 3" awayName="استون ویلا" awayLogo={Astonvila} />
            <MatchsCard homeName="برموث" homeLogo={Bournemouth} matchTime="18:00" matchDate="3 مهر" awayName="برنتفورد" awayLogo={Brentford} />
            <MatchsCard homeName="برایتون" homeLogo={Brighton} matchTime="18:30" matchDate="مهر 3" awayName="چلسی" awayLogo={Chelsea} />
            <MatchsCard homeName="کریستال پالاس" homeLogo={crystalPalace} matchTime="18:30" matchDate="مهر 3" awayName="اورتون" awayLogo={Everton} />
            <MatchsCard homeName="اورتون" homeLogo={Everton} matchTime="19:00" matchDate="مهر 3" awayName="فولام" awayLogo={Folaham} />
            <MatchsCard homeName="لسترسیتی" homeLogo={leicesterCity} matchTime="19:00" matchDate="مهر 3" awayName="لیدر یونایتد" awayLogo={leedsUnited} />
            <MatchsCard homeName="لیورپول" homeLogo={liverPool} matchTime="19:00" matchDate="مهر 3" awayName="منچسترسیتی" awayLogo={ManchesterCity} />
            <MatchsCard homeName="منچستریونایتد" homeLogo={ManchesterUnited} matchTime="19:30" matchDate="مهر 3" awayName="ناتینگهام" awayLogo={natihgham} />
            <MatchsCard homeName="نیوکاسل" homeLogo={newcastle} matchTime="19:30" matchDate="مهر 3" awayName="ساوت همپتون" awayLogo={southampton} />
            <MatchsCard homeName="تاتنهام" homeLogo={tatenham} matchTime="20:00" matchDate="مهر 3" awayName="ولور همپتون" awayLogo={volverhampton} />
            <MatchsCard homeName="وستهام" homeLogo={westHam} matchTime="23:30" matchDate="مهر 3" awayName="منچستر سیتی" awayLogo={ManchesterUnited} />
        </div>
    );
};

export default Matchs;