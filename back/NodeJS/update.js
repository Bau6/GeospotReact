const connection = require('./connect');
const bcrypt = require('bcrypt');

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
                if (params.password) {
                    bcrypt.hash(params.password, 10, (hashErr, hash) => {
                        if (hashErr) {
                            console.log(hashErr);
                            res.status(500).json({ error: 'Ошибка шифрования пароля' });
                        } else {
                            params.password = hash;
                            updateRecordWithCheck(table, params, res);
                        }
                    });
                } else {
                    updateRecordWithCheck(table, params, res);
                }
            }
        }
    });
}

function updateRecordWithCheck(table, params, res) {
    if (params.email) {
        connection.query("SELECT COUNT(*) AS count FROM ?? WHERE email = ? AND id <> ?", [table, params.email, params.id], (checkErr, checkResult) => {
            if (checkErr) {
                console.log(checkErr);
                res.status(500).json({ error: 'Ошибка при проверке email' });
            } else {
                if (checkResult[0].count > 0) {
                    res.status(400).json({ error: 'Email уже существует' });
                } else {
                    let updateFields = [];
                    let updateValues = [];
                    for (let key in params) {
                        if (key !== 'id') {
                            updateFields.push(`${key} = ?`);
                            updateValues.push(params[key]);
                        }
                    }
                    updateValues.push(params.id);
                    let updateQuery = `UPDATE ?? SET ${updateFields.join(', ')} WHERE id = ?`;
                    connection.query(updateQuery, [table, ...updateValues], (updateErr, updateResult) => {
                        if (updateErr) {
                            console.log(updateErr);
                            res.status(500).json({ error: 'Ошибка при обновлении записи' });
                        } else {
                            res.json({ message: 'Запись успешно обновлена' });
                        }
                    });
                }
            }
        });
    } else {
        let updateFields = [];
        let updateValues = [];
        for (let key in params) {
            if (key !== 'id') {
                updateFields.push(`${key} = ?`);
                updateValues.push(params[key]);
            }
        }
        updateValues.push(params.id);
        let updateQuery = `UPDATE ?? SET ${updateFields.join(', ')} WHERE id = ?`;
        connection.query(updateQuery, [table, ...updateValues], (updateErr, updateResult) => {
            if (updateErr) {
                console.log(updateErr);
                res.status(500).json({ error: 'Ошибка при обновлении записи' });
            } else {
                res.json({ message: 'Запись успешно обновлена' });
            }
        });
    }
}

module.exports = { updateRecord };