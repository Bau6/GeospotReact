let savedResult = null;
const connection = require('./connect');
const TABLE = "cities";

function loadCities(res) {
    let query = "SELECT * FROM ??";
    connection.query(query, TABLE, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            savedResult = result;
        }
    });
    if (savedResult) {
        res.json(savedResult);
    } else {
        res.status(404).json({ error: 'Результат не найден' });
    }
}

module.exports = { loadCities };

