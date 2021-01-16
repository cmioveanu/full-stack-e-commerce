require('dotenv').config();
const express = require('express');
const app = express();


/****  Dependencies  ****/
/***********************/
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('cookie-parser')());
const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));


const passport = require('passport');
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());


//app.use(‘/public’, express.static(__dirname + ‘/public’));
const flash = require('connect-flash');
app.use(flash());

const session = require('express-session');
app.use(session({secret: 'keyboard cat'}))


var request = require('request');










//****  Routes  ****/
//*****************/

const accountRouter = require('./routes/account');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

app.use('/account', accountRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);












const port = process.env.PORT;

app.listen(port, () => console.log(`Listening on port ${port}...`));