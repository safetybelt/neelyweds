import React, { PropTypes } from 'react';
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
            <span
                className={`${styles.menu} ion-navicon-round`}
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
