import React from 'react';
import styles from './Banner.module.css';

export const Banner = (props) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerLeftWatch}>
                <div className={styles.names}>
                    <h3>Wooden Watch</h3>
                    <h2>The Geneva</h2>
                </div>
            </div>
            <div className={styles.bannerRightWatch}>
                <div className={styles.names}>
                    <h3>Wooden Sunglasses</h3>
                    <h2>The Scandinavia</h2>
                </div>
            </div>
        </section>
    );
};