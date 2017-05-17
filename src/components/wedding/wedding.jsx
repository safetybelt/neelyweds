import React from 'react';
import './wedding.scss';
import day from 'data/day.json';
import inTown from 'data/inTown.json';
import { getLayoutFromJson } from 'utils';
import { Banner } from 'components';

const Wedding = () => (
    <section className="wedding">
        <Banner title="the big day" />
        {getLayoutFromJson(day)}
        <Banner title="while you're in town" />
        {getLayoutFromJson(inTown)}
    </section>
);

export default Wedding;
