import React from 'react';
import styles from './Bestsellers.module.css';
import { useState, useEffect } from 'react';



export const Bestsellers = (props) => {
    const [bestsellers, setBestsellers] = useState([]);

    const productsList = async () => {
        const products = await fetch('http://localhost:8080/products');
        const jsonProducts = await products.json();
        setBestsellers(jsonProducts);
    }


    useEffect(() => {
        productsList();
        console.log(bestsellers);
    }, [])




    return (
        <section className={styles.bestsellers}>
            {
                bestsellers.map(product => (
                    <div class={styles.product} key={product.id}>
                        <img src={product.img_thumb_path} alt="" />
                        <h2>{product.name}</h2>
                        <p>£{product.unit_price}</p>
                        <button onClick={() => {
                            props.addToCart(product);
                            props.addToTotal(product.unit_price);
                        }}>Add to cart</button>
                    </div>
                ))
            }
        </section >
    );
};