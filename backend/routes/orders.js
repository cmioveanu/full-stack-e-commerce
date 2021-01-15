const express = require('express');
const orders = express.Router();
module.exports = orders;

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);



orders.get('/', (req, res) => {
    pool.query('SELECT * FROM Orders ORDER BY created_at DESC', (error, results) => {
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