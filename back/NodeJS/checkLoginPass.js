const connection = require('./connect');
const bcrypt = require('bcrypt');

function checkLoginPass(table, params, res) {
    let query = "SELECT * FROM ?? WHERE email = ?";
    connection.query(query, [table, params.email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
        } else {
            if (result.length > 0) {
                // Сравниваем зашифрованный пароль из базы с введенным паролем
                bcrypt.compare(params.password, result[0].password, (compareErr, isMatch) => {
                    if (compareErr) {
                        console.log(compareErr);
                        res.status(500).json({ error: 'Ошибка сравнения паролей' });
                    } else if (isMatch) {
                        res.json(result[0]);
                    } else {
                        res.status(401).json({ error: 'Неверный пароль' });
                    }
                });
            } else {
                res.status(404).json({ error: 'Пользователь не найден' });
            }
        }
    });
}

module.exports = { checkLoginPass };