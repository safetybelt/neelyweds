import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './navigation.scss';

/* eslint-disable react/no-multi-comp */

const getText = (link) => {
    let title = link.title;
    if (title.indexOf('{{icon}}') && link.icon) {
        title = title.split('{{icon}}');
        return link.main ? <h1>{title[0]}<i className={`icon ${link.icon}`}/>{title[1]}</h1> :
        <span>{title[0]}<i className={`icon ${link.icon}`}/>{title[1]}</span>;
    } else {
        return link.main ? <h1>{title}</h1> : <span>{title}</span>;
    }
};

const getClassName = (link, active) => {
    return link.main ? null : `${styles['nav-link']} ${link.route === active ? styles.active : ''}`;
};

const Navigation = ({ links, active, menuActive }) => (
    <nav className={`${styles.navigation} ${menuActive ? styles.menuActive : ''}`}>
        {links.map((link) => {
            return (
                <Link to={link.route} key={link.route} className={getClassName(link, active)}>
                    {getText(link)}
                </Link>
            );
        })}
    </nav>
);

Navigation.propTypes = {
    active: PropTypes.string,
    menuActive: PropTypes.bool,
    links: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        route: PropTypes.string,
        main: PropTypes.bool,
        icon: PropTypes.string,
    })),
};

export default Navigation;
