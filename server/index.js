const express = require('express')
const app = express()
const path = require("path")
const mysql = require('mysql')


const APP_PORT = 4000;

const db = mysql.createPool ({
    host: 'localhost',
    user: 'admin',
    password: 'Fullstack2437!',
    database: 'grofairydb' 

});


app.use(express.static(path.join(__dirname, 'frontend','build')));

app.listen(APP_PORT, () => {
    console.log("running on port", APP_PORT);
});