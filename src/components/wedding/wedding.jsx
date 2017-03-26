import React from 'react';
import './wedding.scss';
import { Banner } from 'components';

const Wedding = () => (
    <section className="wedding">
        <Banner title="the big day" />
        <p>this is the wedding section</p>
        <p>a bunch of stuff will be here</p>
        <Banner title="venue" />
        <p> some stuff about the venue should go here</p>
    </section>
);

export default Wedding;
