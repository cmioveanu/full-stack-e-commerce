import React from 'react';
import { useState } from 'react';

import styles from './Cart.module.css';

export const Cart = (props) => {
    

    

    return (
        <section className={styles.cart}>
            <p>{props.cart.length} item(s) added to your cart</p>
            {
                props.cart.map(product => (
                    <div key={product.id} className={styles.product}>
                        <div><img src={product.img_thumb_path}></img></div>

                        <div className={styles.productInfo}>
                            <p>{product.name} <br /></p>
                            <p>{product.quantity} x £{product.unit_price}</p>

                            <button onClick={() => {
                                props.removeFromTotal(product.unit_price);
                                props.removeFromCart(product);
                            }}>-</button> {product.quantity} <button onClick={() => {
                                props.addToTotal(product.unit_price);
                                props.addToCart(product);
                            }}>+</button>
                            <br />
                            <button onClick={() => props.removeAllFromCart(product)}>Remove</button>

                        </div>
                    </div>
                ))
            }
            <div>
                <p>FREE SHIPPING ON ALL U.S. ORDERS</p>
                <p>SUBTOTAL: £{props.total.toFixed(2)}</p>
            </div>
        </section>
    );
}