import React from 'react';
import styles from './Account.module.css';
import { useState, useEffect } from 'react';



export const Account = () => {
    const [orders, setOrders] = useState([]);

    const ordersList = async () => {
        const orders = await fetch('http://localhost:8080/orders');
        const jsonOrders = await orders.json();
        setOrders(jsonOrders);
        console.log(jsonOrders);
    }


    useEffect(() => {
        ordersList();
    }, [])

    return (
        <section className={styles.account}>
            {
                orders.map(order => (
                    <div key={order.created_at} class={styles.individualOrder}>
                        <h2>Order Number: {order.order_id} </h2>
                        <h3>By {order.first_name} {order.last_name}</h3>
                        <p>Date: {order.created_at}</p>
                        <p>No. of Products: {orders.quantity}</p>
                       
                    </div>
                ))
            }
        </section>
    );
}