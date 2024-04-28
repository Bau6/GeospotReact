const connection = require('./connect');
const SPORTS = "qualifications";

function loadQual(res) {
    let query = "SELECT * FROM ?? ";
    connection.query(query, SPORTS, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
        } else {
            res.json(result);
        }
    });
}

module.exports = { loadQual };