import React from 'react';
import Leagues from "../Leagues"
import LiveMatchs from '../LiveMatchs';
import Matchs from '../Matchs';
import MatchsHeader from '../MatchsHeader';

const PremierLeauge = () => {
    return (
        <div>
            <Leagues />
            <LiveMatchs />
            <MatchsHeader />
            <Matchs />
        </div>
    );
};

export default PremierLeauge;