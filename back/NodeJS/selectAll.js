let savedResult = null;
const connection = require('./connect');

function selectAll(table, params, res) {
    let query = "SELECT * FROM ??";
    connection.query(query, table, (err, result) => {
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

module.exports = { selectAll };

