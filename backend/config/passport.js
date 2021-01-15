const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const dbConfig = require('../config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);



passport.use('local', new LocalStrategy({ passReqToCallback: true }, (req, username, password, done) => {

  loginAttempt();
  async function loginAttempt() {


    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      var currentAccountsData = await JSON.stringify(client.query('SELECT id, name, email, password FROM customers WHERE username=$1', [username], function (err, result) {

        if (err) {
          return done(err)
        }
        if (result.rows[0] == null) {
          console.log("Oops. Incorrect login details...");
          req.flash('danger', "Oops. Incorrect login details.");
          return done(null, false);
        }
        else {
          bcrypt.compare(password, result.rows[0].password, function (err, check) {
            if (err) {
              console.log('Error while checking password');
              return done();
            }
            else if (check) {
              console.log("User authenticated successfully...");
              return done(null, [{ email: result.rows[0].email, firstName: result.rows[0].firstName }]);
            }
            else {
              console.log("Incorrect login details...");
              req.flash('danger', "Oops. Incorrect login details.");
              return done(null, false);
            }
          });
        }
      }))
    }

    catch (e) { throw (e); }
  };

}
))
passport.serializeUser(function (user, done) {
  done(null, user);
}); passport.deserializeUser(function (user, done) {
  done(null, user);
});