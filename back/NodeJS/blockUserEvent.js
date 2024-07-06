const connection = require('./connect');
const TABLE = "event"
function blockUserEvent( params, res) {
    let selectQuery = "SELECT * FROM ?? WHERE id = ?";
    connection.query(selectQuery, [TABLE, params.eventId], (selectErr, selectResult) => {
        if (selectErr) {
            console.log(selectErr);
            res.status(500).json({ error: 'Ошибка при поиске записи' });
        } else {
            if (selectResult.length === 0) {
                res.status(404).json({ error: 'Запись с указанным ID не найдена' });
            } else {
                let updateQuery = "UPDATE ?? SET status = ? WHERE id = ?";
                connection.query(updateQuery, [TABLE, 1, params.eventId], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.status(500).json({ error: 'Ошибка при блокировке!' });
                    } else {
                        res.status(200).json({ message: 'Пользователь заблокирован!' });
                    }
                });
            }
        }
    });
}

module.exports = { blockUserEvent };