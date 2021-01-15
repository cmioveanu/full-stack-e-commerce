import React from 'react';
import styles from './Bestsellers.module.css';
import { useState, useEffect } from 'react';



export const Bestsellers = (props) => {
    const [bestsellers, setBestsellers] = useState([]);

    const productsList = async () => {
        const products = await fetch('http://localhost:8080/products');
        const jsonProducts = await products.json();
        setBestsellers(jsonProducts);
        console.log(bestsellers);
    }


    useEffect(() => {
        productsList();
    }, [])


    return (
        <section className={styles.bestsellers}>
            {
                bestsellers.map(product => (
                    <div class={styles.product} key={product.id}>
                        <img src={product.img_thumb_path} alt="" />
                        <h2>{product.name}</h2>
                    </div>
                ))
            }
        </section >
    );
};