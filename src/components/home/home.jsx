import React from 'react';
import styles from './home.scss';

const fullImg = require('img/she-said-yes.jpg');
const mobileImg = require('img/castle-kiss.jpg');

const Home = () => (
    <section className={styles.home}>
        <img src={fullImg} className={styles['full-size']} />
        <img src={mobileImg} className={styles.responsive} />
    </section>
);

export default Home;
