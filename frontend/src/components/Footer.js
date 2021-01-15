import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <p>Description goes here.</p>
            <ul>
                <li><a href="">about</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Sunglasses</a></li>
                <li><a href="">Watches</a></li>
            </ul>

            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
                <li><a href="">Account</a></li>
            </ul>
        </footer>
    );
};