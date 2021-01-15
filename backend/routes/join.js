const express = require('express');
const join = express.Router();
module.exports = join;

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);

const bcrypt = require('bcrypt');


join.post('/', async function (req, res) {

    try {
        const client = await pool.connect();
        await client.query('BEGIN');
        var pwd = await bcrypt.hash(req.body.password, 5);
        console.log(req.body);

        await JSON.stringify(client.query('SELECT id FROM customers WHERE email=$1', [req.body.email], function (err, result) {
            if (result.rows[0]) {
                req.flash('warning', "This email address is already registered. < a href = '/login' > Log in !</a >");
                res.redirect('/join');
            }
            else {
                client.query('INSERT INTO customers (name, email, phone, username, password) VALUES ($1, $2, $3, $4, $5)', [req.body.name, req.body.email, req.body.phone, req.body.username, pwd], function (err, result) {
                    if (err) { console.log(err); }
                    else {

                        client.query('COMMIT')
                        console.log(result)
                        req.flash('success', 'User created.')
                        res.redirect('/login');
                        return;
                    }
                });
            }

        }));
        client.release();
    }
    catch (e) { throw (e) }
});