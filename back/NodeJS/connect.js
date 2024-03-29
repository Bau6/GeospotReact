const mysql = require('mysql');
const cors = require('cors');
const app = require('express')();
// let savedResult = null;
app.use(cors());
// const port = 3003;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'res'
});

connection.connect(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Database----OK");
    }
});

module.exports = connection;


