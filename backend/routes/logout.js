const express = require('express');
const logout = express.Router();
module.exports = logout;

logout.get('/', function (req, res) {

    console.log(req.isAuthenticated());
    req.logout();
    console.log(req.isAuthenticated());
    req.flash('success', "Logged out.See you soon!");
    res.redirect('/');
});