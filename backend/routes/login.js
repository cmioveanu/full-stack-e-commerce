const express = require('express');
const login = express.Router();
module.exports = login;

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);


/*login.post('/', (req, res) => {

});*/






