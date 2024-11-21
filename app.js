const express = require('express');
const route = require('./routes/user');
const app = express();
const path = require('path');

require('dotenv').config();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use('/', route);

app.listen(process.env.PORT || 7000)