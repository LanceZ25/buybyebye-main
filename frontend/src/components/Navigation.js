// frontend/src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/HomePage.html">Home</Link>
                </li>
                <li>
                    <Link to="/AboutPage.html">About</Link>
                </li>
                <li>
                    <Link to="/ChangieFoodCenter.html">Changie Food Center</Link>
                </li>
                <li>
                    <Link to="/TakoNaidu.html">Tako Naidu</Link>
                </li>
                <li>
                    <Link to="/Hygge.html">Hygge</Link>
                </li>
                <li>
                    <Link to="/MotionApparel.html">Motion Apparel</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
