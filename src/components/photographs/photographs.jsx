import React from 'react';
import json from 'data/data.json';

const thumbnails = json.photos.map((img) => require(`img/${img}-tn.jpg`));
// const images = json.photos.map((img) => require(`img/${img}.jpg`));

import './photographs.scss';

const Photographs = () => (
    <section className="photographs">
        {thumbnails.map((img, i) => {
            return (
                <div key={i} className="img-wrapper">
                    <img src={img} />
                </div>
            );
        })}
    </section>
);

export default Photographs;
