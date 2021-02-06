import React from 'react';
import styles from './Banner.module.css';

/*the css for the banners has a common .banner class, and specific class names
that are passed in as props for the individual background images
*/

export const Banner = (props) => {

    return (
        <section className={styles.bannerContainer}>
            <div className={`${styles.banner} ${styles[props.leftBanner]}`}>
                <div className={styles.names}>
                    <h3>Wooden Sunglasses</h3>
                    <h2>The Utah</h2>
                </div>
            </div>
            <div className={`${styles.banner} ${styles[props.rightBanner]}`}>
                <div className={styles.names}>
                    <h3>Wooden Sunglasses</h3>
                    <h2>The Idaho</h2>
                </div>
            </div>
        </section>
    );
};