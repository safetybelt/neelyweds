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
        <div className="in-town-wrapper">
            {getLayoutFromJson(inTown)}
        </div>
    </section>
);

export default Wedding;


// md-beer = beer
// md-restaurant = food
// md-camera = site seeing
// ios-people = family friendly
// ios-cafe = coffee
