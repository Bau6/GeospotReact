const connection = require('./connect');

function deleteRecord(table, id, res) {
    let selectQuery = "SELECT * FROM ?? WHERE id = ?";
    connection.query(selectQuery, [table, id], (selectErr, selectResult) => {
        if (selectErr) {
            console.log(selectErr);
            res.status(500).json({ error: 'Ошибка при поиске записи' });
        } else {
            if (selectResult.length === 0) {
                res.status(404).json({ error: 'Запись с указанным ID не найдена' });
            } else {
                let deleteQuery = "DELETE FROM ?? WHERE id = ?";
                connection.query(deleteQuery, [table, id], (deleteErr, deleteResult) => {
                    if (deleteErr) {
                        console.log(deleteErr);
                        res.status(500).json({ error: 'Ошибка при удалении записи' });
                    } else {
                        console.log(deleteResult);
                        res.json({ message: 'Запись успешно удалена' });
                    }
                });
            }
        }
    });
}

module.exports = { deleteRecord };