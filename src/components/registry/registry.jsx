import React from 'react';
import './registry.scss';
import { Banner } from 'components';

const zola = require('img/zola-logo-pride.svg');
const ws = require('img/ws-logo.svg');

const Registry = () => (
    <section className="registry">
        <Banner title="registry" />
        <p>First, we'd like to say that your love and laughter on our wedding day are the most special gifts we could ever hope to receive. However, should you wish to honor us with a gift, we have created registries below. Thank you so much for joining us as we take our first steps into married life!</p>
        <div className="logo-wrapper">
            <a href="https://www.zola.com/registry/theneelyweds/" target="_blank"><img src={zola} alt="Zola Registry Logo" /></a>
            <a href="https://www.williams-sonoma.com/registry/sfkc6zgfsz/registry-list.html?cm_type=lnav" target="_blank"><img src={ws} alt="Williams-Sonoma Registry Logo" /></a>
        </div>
    </section>
);

export default Registry;
