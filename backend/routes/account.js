const express = require('express');
const account = express.Router();
module.exports = account;



account.get('/', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.render('account', { title: "Account", userData: req.user, userData: req.user, messages: { danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success') } });
    }
    else {
        res.redirect('/login');
    }
});