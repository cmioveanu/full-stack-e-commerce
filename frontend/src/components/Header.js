import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <nav className={styles.mainNav}>
                <ul>
                    <li><a href="" className={styles.logo}><span>The Wooden Shop</span></a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <ul>
                    <li><a href="">Search</a></li>
                    <li><a href="">Log In</a></li>
                    <li><a href="">Account</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};