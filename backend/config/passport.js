/*const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);

passport.use(new LocalStrategy((username, password, cb) => {
    pool.query('SELECT id, username, password FROM customers WHERE username=$1', [username], (err, result) => {
      if(err) {
        throw error(err);
      }
  
      if(result.rows.length > 0) {
        const first = result.rows[0]
        bcrypt.compare(password, first.password, function(err, res) {
          if(res) {
            cb(null, { id: first.id, username: first.username})
           } else {
            cb(null, false)
           }
         })
       } else {
         cb(null, false)
       }
    })
  }))


  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  
  passport.deserializeUser((id, cb) => {
    pool.query('SELECT id, username FROM customers WHERE id = $1', [parseInt(id, 10)], (err, results) => {
      if(err) {
        throw error(err);
      }
  
      cb(null, results.rows[0])
    })
  })*/