const mysql = require('mysql');
const cors = require('cors');
const app = require('express')();
let savedResult = null;
app.use(cors());
const port = 3003;

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

let query = "SELECT * FROM users";

connection.query(query, (err, result, field) => {
    if (err) {
        console.log(err);
    } else {
        savedResult = result;
        console.log(result);
        console.log(result[0]['name']);
    }
});

function tt(value) {
    console.log(value);
}
app.get('/', (req, res) => {
    res.send('Это главная страница');
});
app.get('/saved-result', (req, res) => {
    if (savedResult) {
        res.json(savedResult);
    } else {
        res.status(404).json({ error: 'Результат не найден' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

