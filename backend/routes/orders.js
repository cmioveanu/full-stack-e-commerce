const express = require('express');
const orders = express.Router();
module.exports = orders;

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);



orders.get('/', async (req, res) => {
    const ordersList = [];
    const ids = await pool.query(`SELECT id FROM orders ORDER BY id DESC`);

    for (let i = ids.rows[0].id; i > 0; i--) {
        const result = await pool.query(`
            SELECT orders_products.order_id,
                   orders_products.product_id,
                   orders_products.quantity,
                   products.name,
                   products.unit_price
            FROM orders_products
            JOIN products ON orders_products.product_id = products.id
            WHERE orders_products.order_id = ${i}`);

        if (result.rows.length > 0) { ordersList.push(result.rows); }
    }

    res.send(ordersList);
});



orders.get('/', (req, res) => {
    pool.query(`SELECT * FROM orders, products, customers, orders_products
                WHERE orders.id = orders_products.order_id 
                AND products.id = orders_products.product_id
                AND customers.id = orders.customer_id;`, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(results.rows);
    })
});



orders.post('/', (req, res) => {
    const customerId = req.body.customerId;
    const products = req.body.orderProducts;

    const now = new Date();
    const queryString = `
        INSERT INTO Orders(customer_id, created_at, status)
        VALUES($1, $2, $3)
        RETURNING *
        `;

    pool.query(queryString, [customerId, now, "Pending"], (err, result) => {
        if (err) {
            throw error;
        } else {
            try {
                products.forEach(product => {
                    productString = `
                    INSERT INTO Orders_Products
                    VALUES($1, $2, $3, $4)
                    `;

                    pool.query(productString, [result.rows[0].id, product.id, product.quantity * product.price, product.quantity]);
                });
            } catch (error) {
                console.log(error);
            }

            res.status(201).send("Order created!");
        }
    });

});



orders.put('/:id', (req, res) => {
    const orderId = req.params.id;
    const status = 'Canceled';
    const queryString = `
        UPDATE Orders
        SET status = $2
        WHERE id = $1
        RETURNING *
        `;
    pool.query(queryString, [orderId, status]);
    res.status(200).send("Updated successfuly!");
});