import React from 'react';
import styles from './BannerSunglasses.module.css';

export const BannerSunglasses= () => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerLeftWatch}>
                <div className={styles.names}>
                    <h3>Wooden Sunglasses</h3>
                    <h2>The Utah</h2>
                </div>
            </div>
            <div className={styles.bannerRightWatch}>
                <div className={styles.names}>
                    <h3>Wooden Sunglasses</h3>
                    <h2>The Idaho</h2>
                </div>
            </div>
        </section>
    );
};