const connection = require('./connect');
function selectById(table, ids, res) {
    let query = "SELECT * FROM ?? WHERE id IN (?)";
    connection.query(query, [table, ids], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
        } else {
            if (result.length > 0) {
                res.json(result);
            } else {
                res.status(404).json({ error: 'Результаты не найдены' });
            }
        }
    });
}

module.exports = { selectById };