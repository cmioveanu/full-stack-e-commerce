import React from 'react';
import styles from './Banner.module.css';

export const Banner = (props) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.bannerLeftWatch}>
                <div>
                    <h2></h2>
                    <h3></h3>
                </div>
            </div>
            <div className={styles.bannerRightWatch}>
                <button>Shop Now</button>
            </div>
        </section>
    );
};