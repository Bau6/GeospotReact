const connection = require('./connect');

function addRecord(table, params, res) {
    // Проверка наличия всех обязательных полей
    if (Object.values(params).every(value => value !== "" && value !== undefined)) {
        let insertQuery = "INSERT INTO ?? SET ?";
        connection.query(insertQuery, [table, params], (insertErr, insertResult) => {
            if (insertErr) {
                console.log(insertErr);
                res.status(500).json({ error: 'Ошибка при добавлении записи' });
            } else {
                res.json({ message: 'Запись успешно добавлена' });
            }
        });
    } else {
        res.status(400).json({ error: 'Не все обязательные поля заполнены' });
        return;
    }
}

module.exports = { addRecord };