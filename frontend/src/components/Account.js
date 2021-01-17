import React from 'react';
import styles from './Account.module.css';
import { useState, useEffect } from 'react';



export const Account = () => {
    const [orders, setOrders] = useState([]);

    const ordersList = async () => {
        const orders = await fetch('http://localhost:8080/orders');
        const jsonOrders = await orders.json();
        setOrders(jsonOrders);
    }


    useEffect(() => {
        ordersList();
    }, [])

    return (
        <section className={styles.account}>

            <section className={styles.ordersContainer}>
                <h2>Welcome back, Cristian! Your previous orders:</h2>
                <div className={styles.ordersHistory}>
                {
                    orders.map(order => (
                        <div key={order[0].id} className={styles.individualOrder}>
                            <div className={styles.orderDetails}>
                                <p>{(order[0].created_at)}</p>
                                <p>Order # {order[0].order_id} </p>
                                <p>Order total: £{order[0].totalOrderAmount}</p>
                            </div>
                            {
                                order.map(product => (
                                    <div className={styles.productDetails} >
                                        <img src={product.img_thumb_path} />
                                        <div>
                                            <p className={styles.productName}>{product.name}</p>
                                            <p>£{product.unit_price}</p>
                                            <p>Qty: {product.quantity}</p>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    ))
                }
                </div>
            </section>
        </section>
    );
}