import React, { PropTypes } from 'react';
import json from 'data/data.json';
import { Banner } from 'components';

const images = json.photos.map((img) => Object.assign({}, img, { url: require(`img/${img.title}-tn.jpg`) }));
console.log(images);
// const images = json.photos.map((img) => require(`img/${img}.jpg`));

import './photographs.scss';

/* eslint-disable react/no-multi-comp */

const PhotoDescription = ({ main, secondary, width, horizontal = false, reverse = false, arrow = false, }) => {
    const convert = (elem) => {
        switch (elem.type) {
            case 'img':
                return <img src={elem.url} />;
            case 'text':
                return <p>{elem.text}</p>;
            default:
                return null;
        }
    };

    return (
        <div className={`trendy-box ${width || 'standard'}${horizontal ? ' horizontal' : ''}`}>
            <div className={`primary-wrapper${reverse} ? ' reverse' : ''`}>
                {convert(main)}
            </div>
            <div className={`secondary-wrapper${arrow ? ' arrow' : ''}`}>
                {convert(secondary)}
            </div>
        </div>
    );
};

PhotoDescription.propTypes = {
    main: PropTypes.shape({ type: PropTypes.string }),
    secondary: PropTypes.shape({ type: PropTypes.string }),
    width: PropTypes.string,
    horizontal: PropTypes.bool,
    reverse: PropTypes.bool,
    arrow: PropTypes.bool,
};

const Photographs = () => (
    <section className="photographs">
        <Banner title="photographs" />
        <div className="hella-trendy">
            <PhotoDescription
                main={{ type: 'img', url: images[0].url }}
                secondary={{ type: 'text', text: images[0].description }}
            />
        </div>
    </section>
);

/* eslint-enable */

export default Photographs;
