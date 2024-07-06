const connection = require('./connect');
const USERS = "users";
const EVENTS = "events";
const EVENT = "event";
const USER_SPORT_QUALIFICATIONS = `user_sport_qualification`;

function registrationUserOnTourney(params, res) {
    let selectUserQuery = "SELECT * FROM ?? WHERE id = ?";
    let selectEventQuery = "SELECT * FROM ?? WHERE id = ?";
    let selectQualsQuery = "SELECT * FROM ?? WHERE user_id = ?";
    let addInfoRegTourney = {};
    connection.query(selectUserQuery, [USERS, params.userId], (userErr, userResult) => {
        if (userErr) {
            console.log(userErr);
            res.status(500).json({error: 'Ошибка при поиске информации о пользователе'});
        } else {
            if (userResult.length === 0) {
                console.log('Пользователь с указанным ID не найден');
                res.status(500).json({error: 'Пользователь с указанным ID не найден'});
                return;
            }
            connection.query(selectEventQuery, [EVENTS, params.eventId], (eventErr, eventResult) => {
                if (eventErr) {
                    console.log(eventErr);
                    res.status(500).json({error: 'Ошибка при поиске информации о мероприятии'});
                } else {
                    if (eventResult.length === 0) {
                        console.log('Мероприятие с указанным ID не найдено');
                        res.status(500).json({error: 'Мероприятие с указанным ID не найдено'});
                        return;
                    }
                    connection.query(selectQualsQuery, [USER_SPORT_QUALIFICATIONS, params.userId], (qualsErr, qualsResult) => {
                        if (qualsErr) {
                            console.log(qualsErr);
                            res.status(500).json({error: 'Ошибка при поиске информации о квалификации'});
                        } else {
                            if (qualsResult.length === 0 || !qualsResult) {
                                console.log('Квалификация пользователя не найдена');
                                res.status(500).json({ error: 'Квалификация пользователя не найдена' });
                                return;
                            }

                            let playerID = params.userId;
                            let eventID = params.eventId;
// Проверка на существование записи с таким playerID и eventID
                            connection.query("SELECT * FROM ?? WHERE playerID = ? AND eventsID = ?", [EVENT, playerID, eventID], (checkErr, checkResult) => {
                                if (checkErr) {
                                    console.log(checkErr);
                                    res.status(500).json({ error: 'Ошибка при проверке существующих записей' });
                                } else {
                                    if (checkResult.length > 0) {
                                        res.status(500).json({ message: 'Вы уже зарегистрированы на данное мероприятие!' });
                                    } else {
                                        let qualificationFound = false;
                                        qualsResult.forEach((qual) => {
                                            if (qual.sport_id === eventResult[0].sportTypeID) {
                                                qualificationFound = true;
                                            }
                                        });
                                        if (qualificationFound) {
                                            addInfoRegTourney.eventsID = eventID;
                                            addInfoRegTourney.playerID = playerID;
                                            addInfoRegTourney.status = 2;
                                            addInfoRegTourney.result = 1;
                                            addInfoRegTourney.dateRegistration = new Date();
                                            let insertQuery = "INSERT INTO ?? SET ?";
                                            connection.query(insertQuery, [EVENT, addInfoRegTourney], (insertErr, insertResult) => {
                                                if (insertErr) {
                                                    console.log(insertErr);
                                                    res.status(500).json({ error: 'Ошибка при добавлении записи' });
                                                } else {
                                                    res.json({ message: 'Запись успешно добавлена' });
                                                }
                                            });
                                        } else {res.status(500).json({ error: 'У вас нет необходимой квалификации!' });}
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

module.exports = {registrationUserOnTourney};