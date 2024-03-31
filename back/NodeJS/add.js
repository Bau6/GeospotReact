const connection = require('./connect');
const bcrypt = require('bcrypt');

function addRecord(table, params, res) {
    if (Object.values(params).every(value => value !== "" && value !== undefined)) {
        if (params.password) {
            bcrypt.hash(params.password, 10, (hashErr, hash) => {
                if (hashErr) {
                    console.log(hashErr);
                    res.status(500).json({ error: 'Ошибка шифрования пароля' });
                } else {
                    params.password = hash;

                    if (params.email) {
                        connection.query("SELECT COUNT(*) AS count FROM ?? WHERE email = ?", [table, params.email], (checkErr, checkResult) => {
                            if (checkErr) {
                                console.log(checkErr);
                                res.status(500).json({ error: 'Ошибка при проверке email' });
                            } else {
                                if (checkResult[0].count > 0) {
                                    res.status(400).json({ error: 'Email уже существует' });
                                } else {
                                    let insertQuery = "INSERT INTO ?? SET ?";
                                    connection.query(insertQuery, [table, params], (insertErr, insertResult) => {
                                        if (insertErr) {
                                            console.log(insertErr);
                                            res.status(500).json({ error: 'Ошибка при добавлении записи' });
                                        } else {
                                            res.json({ message: 'Запись успешно добавлена' });
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        let insertQuery = "INSERT INTO ?? SET ?";
                        connection.query(insertQuery, [table, params], (insertErr, insertResult) => {
                            if (insertErr) {
                                console.log(insertErr);
                                res.status(500).json({ error: 'Ошибка при добавлении записи' });
                            } else {
                                res.json({ message: 'Запись успешно добавлена' });
                            }
                        });
                    }
                }
            });
        } else {
            res.status(400).json({ error: 'Пароль обязателен' });
        }
    } else {
        res.status(400).json({ error: 'Не все обязательные поля заполнены' });
    }
}

module.exports = { addRecord };