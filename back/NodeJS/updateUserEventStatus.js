const connection = require('./connect');
const EVENT = 'event';

function updateUserEventStatus(id, res) {
    let selectQuery = "SELECT * FROM ?? WHERE id = ?";
    connection.query(selectQuery, [EVENT, id], (selectErr, selectResult) => {
        if (selectErr) {
            console.log(selectErr);
            res.status(500).json({ error: 'Ошибка при поиске записи' });
        } else {
            if (selectResult.length === 0) {
                res.status(404).json({ error: 'Запись с указанным ID не найдена' });
            } else {
                let updateQuery = "UPDATE ?? SET status = ? WHERE id = ?";
                connection.query(updateQuery, [EVENT, 1, id], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.status(500).json({ error: 'Ошибка при удалении пользователя с турнира' });
                    } else {
                        res.status(200).json({ message: 'Пользователь с турнира успешно удален' });
                    }
                });
            }
        }
    });
}

module.exports = { updateUserEventStatus };