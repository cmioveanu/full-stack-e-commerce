import React from 'react';
import styles from './Header.module.css';

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav className={styles.mainNav}>
                <ul>
                    <li><Link to="/" className={styles.logo}><span>The Wooden Shop</span></Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <ul>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
};