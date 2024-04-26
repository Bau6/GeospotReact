const connection = require('./connect');
const bcrypt = require('bcrypt');
const QUALIFICATION = 'user_sport_qualification'
const QUALIFICATIONS = 'qualifications'
const SPORTS = "sporttype"
function addRecord(table, fParams, res) {
    let params = fParams.params;
    let sports = fParams.sports;
    if (Object.values(params).every(value => value !== "" && value !== undefined)) {
        if (params.password) {
            bcrypt.hash(params.password, 10, (hashErr, hash) => {
                if (hashErr) {
                    console.log(hashErr);
                    res.status(500).json({error: 'Ошибка шифрования пароля'});
                } else {
                    params.password = hash;

                    if (params.email) {
                        connection.query("SELECT COUNT(*) AS count FROM ?? WHERE email = ?", [table, params.email], (checkErr, checkResult) => {
                            if (checkErr) {
                                console.log(checkErr);
                                res.status(500).json({error: 'Ошибка при проверке email'});
                            } else {
                                if (checkResult[0].count > 0) {
                                    res.status(400).json({error: 'Email уже существует'});
                                } else {
                                    let insertQuery = "INSERT INTO ?? SET ?";
                                    connection.query(insertQuery, [table, params], (insertErr, insertResult) => {
                                        if (insertErr) {
                                            console.log(insertErr);
                                            res.status(500).json({error: 'Ошибка при добавлении записи'});
                                        } else {
                                            // res.json({ message: 'Запись успешно добавлена' });
                                            let idUser = "SELECT * FROM ?? WHERE email = ?";
                                            connection.query(idUser, [table, params.email], (err, result) => {
                                                if (err) {
                                                    console.log(err);
                                                    res.status(500).json({error: 'Ошибка при запросе к базе данных'});
                                                } else {
                                                    if (result.length > 0) {
                                                        res.json(result[0]);

                                                        sports.forEach((sport, index) => {
                                                            if (sport !== true) {
                                                                // Здесь выполняется остальной код для каждого значения, не равного true

                                                                // Поиск sportID по имени спорта
                                                                const findSportQuery = "SELECT id FROM ?? WHERE name = ?";
                                                                connection.query(findSportQuery, [SPORTS, sport], (sportErr, sportResult) => {
                                                                    if (sportErr) {
                                                                        console.log(sportErr);
                                                                        res.status(500).json({error: 'Ошибка при поиске спорта'});
                                                                    } else {
                                                                        const sportID = sportResult[0].id;

                                                                        // Поиск qID по нужному условию
                                                                        const findQIDQuery = "SELECT id FROM ?? WHERE condition = ?";
                                                                        connection.query(findQIDQuery, [QUALIFICATIONS, yourCondition], (qErr, qResult) => {
                                                                            if (qErr) {
                                                                                console.log(qErr);
                                                                                res.status(500).json({error: 'Ошибка при поиске qID'});
                                                                            } else {
                                                                                const qID = qResult[0].id;

                                                                                // Вставка данных в таблицу usersSports
                                                                                const insertQuery = "INSERT INTO ?? (user_id, sport_id, qualification_id) VALUES (?, ?, ?)";
                                                                                const values = [QUALIFICATION, result[0].id, sportID, qID];
                                                                                connection.query(insertQuery, values, (insertErr, insertResult) => {
                                                                                    if (insertErr) {
                                                                                        console.log(insertErr);
                                                                                        res.status(500).json({error: 'Ошибка при добавлении записи'});
                                                                                    } else {
                                                                                        res.json({message: 'Запись успешно добавлена'});
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        })
                                                    } else {
                                                        res.status(404).json({error: 'Результат не найден'});
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    } else {
                        let insertQuery = "INSERT INTO ?? SET ?";
                        connection.query(insertQuery, [SPORTS, params], (insertErr, insertResult) => {
                            if (insertErr) {
                                console.log(insertErr);
                                res.status(500).json({error: 'Ошибка при добавлении записи'});
                            } else {
                                res.json({message: 'Запись успешно добавлена'});
                            }
                        });
                    }
                }
            });
        } else {
            res.status(400).json({error: 'Пароль обязателен'});
        }
    } else {
        res.status(400).json({error: 'Не все обязательные поля заполнены'});
    }
}

module.exports = {addRecord};