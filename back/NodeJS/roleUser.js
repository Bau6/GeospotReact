const connection = require('./connect');
function myRole(table, id, res) {
    let query = "SELECT * FROM ?? WHERE userID = ?";
    // console.log(query, [table, id]); // Вывод выполненного SQL-запроса в консоль
    connection.query(query, [table, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных1' });
        } else {
            if (result.length > 0) {
                const roleID = result[0].roleID;
                let query2 = "SELECT nameRole FROM roles WHERE roleID = ?";
                connection.query(query2, [roleID], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).json({error: 'Ошибка при запросе к базе данных2'});
                    } else {
                        if (result.length > 0) {
                            res.json(result[0]);
                        } else {
                            res.status(404).json({error: 'Результат не найден'});
                        }
                    }
                })
            } else {
                res.status(404).json({ error: 'Результат не найден' });
            }
        }
    });
}

module.exports = { myRole };