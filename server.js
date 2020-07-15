if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// npm Packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

// Routers
const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');

// Mongo Database
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true});

//Mongo Database Connection
const db = mongoose.connection;
db.on('error',error => console.error(error));
db.once('open', ()=>console.log('Connected to Mongoose Datebase..'));

// View- Engines
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');

//Morgan
app.use(morgan('tiny'));

// Express
app.use(expressLayouts);
app.use(express.static('public'));

// Body-Parser
app.use(bodyParser.urlencoded({ limit:'10mb',extended: false }));

//Router
app.use('/', indexRouter);
app.use('/authors', authorRouter);


// Port Connection
const port = process.env.PORT || 8080;

app.listen(port,console.log(`Server connected to the port no ${port}`));
