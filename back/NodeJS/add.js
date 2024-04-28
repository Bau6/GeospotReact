const connection = require('./connect');
const bcrypt = require('bcrypt');
const QUALIFICATION = 'user_sport_qualification'
const QUALIFICATIONS = 'qualifications'
const SPORTS = "sporttype"
const ROLE = "userroles";
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

                                                        const userID = result[0].id;
                                                        const sportsFor = sports.map(obj => Object.keys(obj)[0]);
                                                        const qualsFor = sports.map(obj => obj[Object.keys(obj)[0]]);

                                                        const promises = [];
                                                        const valuesRole = [ROLE, userID, 4];
                                                        const insertQueryRole = "INSERT INTO ?? (userID, roleID) VALUES (?, ?)";
                                                        connection.query(insertQueryRole, valuesRole, (insertErrRole) => {
                                                            if (insertErrRole) {
                                                                console.log(insertErrRole);
                                                            }
                                                        });


                                                        sportsFor.forEach((sport, index) => {
                                                            if (!!sport && !!qualsFor[index]) {
                                                                const findSportQuery = "SELECT id FROM ?? WHERE name = ?";
                                                                const findQIDQuery = "SELECT id FROM ?? WHERE name = ?";

                                                                const promise = new Promise((resolve, reject) => {
                                                                    connection.query(findSportQuery, [SPORTS, sport], (sportErr, sportResult) => {
                                                                        if (sportErr) {
                                                                            console.log(sportErr);
                                                                            reject('Ошибка при поиске спорта');
                                                                        } else {
                                                                            const sportID = sportResult[0].id;
                                                                            connection.query(findQIDQuery, [QUALIFICATIONS, qualsFor[index]], (qErr, qResult) => {
                                                                                if (qErr) {
                                                                                    console.log(qErr);
                                                                                    reject('Ошибка при поиске квалификации');
                                                                                } else {
                                                                                    const qID = qResult[0].id;
                                                                                    const insertQuery = "INSERT INTO ?? (user_id, qualification_id, sport_id) VALUES (?, ?, ?)";
                                                                                    const values = [QUALIFICATION, userID, qID, sportID];
                                                                                    connection.query(insertQuery, values, (insertErr, insertResult) => {
                                                                                        if (insertErr) {
                                                                                            console.log(insertErr);
                                                                                            reject('Ошибка при добавлении записи');
                                                                                        } else {
                                                                                            resolve('Запись успешно добавлена');
                                                                                        }
                                                                                    });
                                                                                }
                                                                            });
                                                                        }
                                                                    });
                                                                });

                                                                promises.push(promise);
                                                            }
                                                        });

                                                        Promise.all(promises)
                                                            .then(messages => {
                                                                res.json({ message: messages }); // Отправляем сообщения об успехе всех запросов
                                                            })
                                                            .catch(error => {
                                                                res.status(500).json({ error: error }); // Отправляем сообщение об ошибке
                                                            });
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