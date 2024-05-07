const connection = require('./connect');

function addEvent(table, params, res) {
    let insertQuery = "INSERT INTO ?? SET ?";
    connection.query(insertQuery, [table, params], (insertErr, insertResult) => {
        if (insertErr) {
            console.log(insertErr);
            res.status(500).json({error: 'Ошибка при добавлении записи'});
        } else {
            res.json({message: 'Запись успешно добавлена'});
        }
    });
}

module.exports = {addEvent};