
const express = require('express');
const dotenv = require('dotenv');

const dbConn = require('./db/conn.js');
const router = require('./routes/route.js')

dotenv.config() ;

const app = express() ;
// app.use(cors());
// app.use(express.json());



const PORT = 8000; 
const username = process.env.DB_username;
const password = process.env.DB_password;
dbConn(username, password);

app.use('/', router) ;


app.listen(PORT,()=>{
    console.log("hellloo");
})