// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ChangieFoodCenter from './components/ChangieFoodCenter';
import TakoNaidu from './components/TakoNaidu';
import Hygge from './components/Hygge';
import MotionApparel from './components/MotionApparel';
import NotFound from './components/NotFound'; // Import NotFound component

const App = () => {
    return (
        <Router>
            <Navigation />
            <div>
                <h1>Welcome to Buy Bye Bye</h1>
                <Routes>
                    <Route path="/HomePage.html" element={<HomePage />} />
                    <Route path="/AboutPage.html" element={<AboutPage />} />
                    <Route path="/ChangieFoodCenter.html" element={<ChangieFoodCenter />} />
                    <Route path="/TakoNaidu.html" element={<TakoNaidu />} />
                    <Route path="/Hygge.html" element={<Hygge />} />
                    <Route path="/MotionApparel.html" element={<MotionApparel />} />
                    <Route path="*" element={<NotFound />} /> {/* Catch-all route for NotFound */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;



