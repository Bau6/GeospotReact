const connection = require('./connect');
const TEAMS = 'teams';

function updateTeamEventResult(idE, idR, res) {
    let selectQuery = "SELECT * FROM ?? WHERE id = ?";
    connection.query(selectQuery, [TEAMS, idE], (selectErr, selectResult) => {
        if (selectErr) {
            console.log(selectErr);
            res.status(500).json({ error: 'Ошибка при поиске записи' });
        } else {
            if (selectResult.length === 0) {
                res.status(404).json({ error: 'Запись с указанным ID не найдена' });
            } else {
                let updateQuery = "UPDATE ?? SET result = ? WHERE id = ?";
                connection.query(updateQuery, [TEAMS, idR, idE], (updateErr, updateResult) => {
                    if (updateErr) {
                        console.log(updateErr);
                        res.status(500).json({ error: 'Ошибка при изменении результата' });
                    } else {
                        res.status(200).json({ message: 'Результат успешно изменен' });
                    }
                });
            }
        }
    });
}

module.exports = { updateTeamEventResult };