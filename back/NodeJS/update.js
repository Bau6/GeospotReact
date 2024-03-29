const connection = require('./connect');

function updateRecord(table, params, res) {
    let selectQuery = "SELECT * FROM ?? WHERE id = ?";
    connection.query(selectQuery, [table, params.id], (selectErr, selectResult) => {
        if (selectErr) {
            console.log(selectErr);
            res.status(500).json({ error: 'Ошибка при поиске записи' });
        } else {
            if (selectResult.length === 0) {
                res.status(404).json({ error: 'Запись с указанным ID не найдена' });
            } else {
                let updateQuery = "UPDATE ?? SET name = ?, surname = ? WHERE id = ?";
                connection.query(updateQuery, [table, params.name, params.surname, params.id], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.status(500).json({ error: 'Ошибка при обновлении записи' });
                    } else {
                        console.log(updateResult);
                        res.json({ message: 'Запись успешно обновлена' });
                    }
                });
            }
        }
    });
}

module.exports = { updateRecord };