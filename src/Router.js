import React from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import PremierLeauge from './components/Leagues/PremierLeauge';
import LaLiga from './components/Leagues/LaLiga';
import SerieA from './components/Leagues/SerieA';
import Bundesliga from './components/Leagues/Bundesliga';
import Ligue1 from './components/Leagues/Ligue1';

const Router = () => {
    return (
        <Routes>
            <Route path='/Ligue-1' element={<Ligue1/>} />
            <Route path='/Bundesliga' element={<Bundesliga/>} />
            <Route path='/Serie-A' element={<SerieA/>} />
            <Route path='/La-Liga' element={<LaLiga/>} />
            <Route path='/PremierLeage' element={<PremierLeauge/>} />
            <Route path='/*' element={<Navigate to="/PremierLeage" />}/>
        </Routes>
    );
};

export default Router;