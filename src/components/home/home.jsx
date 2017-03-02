import React from 'react';
import './home.scss';

const fullImg = require('img/she-said-yes.jpg');
const mobileImg = require('img/castle-kiss.jpg');

const Home = () => (
    <section id="home">
        <img src={fullImg} className="full-size" />
        <img src={mobileImg} className="responsive" />
    </section>
);

export default Home;
