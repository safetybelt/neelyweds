import React from 'react';
import './home.scss';

const fullImg = require('img/Engagement57.jpg');
const mobileImg = require('img/Engagement119.jpg');

const Home = () => (
    <section id="home">
        <img src={fullImg} className="full-size" />
        <img src={mobileImg} className="responsive" />
    </section>
);

export default Home;
