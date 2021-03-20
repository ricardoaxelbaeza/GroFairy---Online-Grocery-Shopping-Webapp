const express = require('express')
const app = express()
const mysql = require('mysql')


const db = mysql.createPool ({
    host: 'localhost',
    user: 'admin',
    password: 'Fullstack2437!',
    database: 'grofairydb' 

});


app.get("/", (req, res) => {
    res.send('Ahoy bortha!!!');
});

app.listen(3001, () => {
    console.log("running on port 3010");
});