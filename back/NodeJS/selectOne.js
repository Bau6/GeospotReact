const connection = require('./connect');
function selectOne(table, id, res) {
    let query = "SELECT * FROM ?? WHERE id = ?";
    connection.query(query, [table, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
        } else {
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ error: 'Результат не найден' });
            }
        }
    });
}

module.exports = { selectOne };