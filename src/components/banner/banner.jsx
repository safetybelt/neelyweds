import React, { PropTypes } from 'react';
import './banner.scss';

const Banner = ({ title }) => (
    <div className="banner">
        <h3>{title}</h3>
        <div className="banner-wrap left" />
        <div className="banner-wrap right" />
    </div>
);

Banner.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Banner;
