import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navigation } from 'components';

import styles from './header.scss';

const links = [{
    title: 'Our Story',
    route: 'story',
}, {
    title: 'Photographs',
    route: 'photos',
}, {
    title: 'Jonathan {{icon}} Stephanie',
    route: '/',
    icon: 'ion-ios-heart',
    main: true,
}, {
    title: 'The Big Day',
    route: 'wedding',
}, {
    title: 'Registry',
    route: 'registry',
}];

const Header = ({ path, toggleMenu, menuActive }) => {
    return (
        <header>
            <Link to="/"><h1 className={styles['mobile-only']}>J <i className="icon ion-ios-heart" /> S</h1></Link>
            <div className={menuActive ? styles['menu-cover'] : styles.disabled} onClick={toggleMenu} />
            <span
                className={`${styles.menu} icon ${menuActive ? 'ion-close-round' : 'ion-navicon-round'}`}
                onClick={toggleMenu}
            />
            <div className={styles['header-background']} />
            <Navigation links={links} active={path} menuActive={menuActive} />
        </header>
    );
};

Header.propTypes = {
    path: PropTypes.string,
    toggleMenu: PropTypes.func,
    menuActive: PropTypes.bool,
};

export default Header;
