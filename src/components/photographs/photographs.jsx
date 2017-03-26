import React from 'react';
import json from 'data/data.json';
import { Banner } from 'components';

const thumbnails = json.photos.map((img) => require(`img/${img}-tn.jpg`));
// const images = json.photos.map((img) => require(`img/${img}.jpg`));

import './photographs.scss';

const Photographs = () => (
    <section className="photographs">
        <Banner title="photographs" />
        <div className="thumbnails">
            {thumbnails.map((img, i) => {
                return (
                    <div key={i} className="img-wrapper">
                        <img src={img} />
                    </div>
                );
            })}
        </div>
    </section>
);

export default Photographs;
