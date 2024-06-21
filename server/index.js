
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const dbConn = require('./db/conn.js');
const router = require('./routes/route.js')

const app = express() ;
dotenv.config() ;
app.use(cors()) ;
app.use(bodyParser.json({extended : true}));

// app.use(cors());
// app.use(express.json());



const PORT = 8000; 
const username = process.env.DB_username;
const password = process.env.DB_password;
dbConn(username, password);

app.use('/', router) ;


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));