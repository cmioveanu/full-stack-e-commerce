const express = require('express');
const auth = express.Router();
module.exports = auth;

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);

const passport = require('passport');
const bcrypt = require('bcrypt');


auth.post('/join', async function (req, res) {
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



auth.post('/login', passport.authenticate('local', {
    successRedirect: '/account',
    failureRedirect: '/login',
    failureFlash: true
}), function (req, res) {
    if (req.body.remember) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    } else {
        req.session.cookie.expires = false; // Cookie expires at end of session
    }
    res.redirect('/');
});



auth.get('/logout', function (req, res) {

    console.log(req.isAuthenticated());
    req.logout();
    console.log(req.isAuthenticated());
    req.flash('success', "Logged out.See you soon!");
    res.redirect('/');
});
