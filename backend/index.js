require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const loginRouter = require('./routes/login');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);


const dbConfig = require('./config/db');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);

const users = pool.query('SELECT * FROM Customers', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results.rows);
    return results.rows;
})


var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


    app.use(passport.initialize());
    app.use(passport.session());

passport.use(new LocalStrategy(
    function (username, password, done) {
        users.findOne({ username: username }, function (err, user) {
            if (err) {
                console.log("There was an error!");
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));




app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/orders',
        failureRedirect: '/login',
        failureFlash: true
    })
);














const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}...`));