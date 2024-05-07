const connection = require('./connect');
const {queryDB} = require("./selectEvents");
const EVENT = "event";
const EVENTS = "events";
const USERS = "users";
const RESULT = "results_for_event";
const STATUS = "statuses_for_event";
function loadUsersForEvent(eventId, res) {
    let query = "SELECT * FROM ?? WHERE eventsID = ?";
    connection.query(query, [EVENT, eventId], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            let promises = [];
            result.forEach(row => {
                let eventsID = row.eventsID;
                let playerID = row.playerID;
                let status = row.status;
                let result = row.result;

                let promiseUsers = queryDB("SELECT name, surname, patronymic FROM ?? WHERE id = ?", [USERS, playerID], resultPlayer => {
                    row.player = resultPlayer[0].surname + " " + resultPlayer[0].name + " " + resultPlayer[0].patronymic;
                });

                let promiseEvents = queryDB("SELECT nameEvent FROM ?? WHERE id = ?", [EVENTS, eventsID], resultEvent => {
                    row.event = resultEvent[0].nameEvent;
                });

                let promiseStatus = queryDB("SELECT name FROM ?? WHERE id = ?", [STATUS, status], resultStatus => {
                    row.statusName = resultStatus[0].name;
                });

                let promiseResult = queryDB("SELECT name FROM ?? WHERE id = ?", [RESULT, result], resultResult => {
                    row.resultName = resultResult[0].name;
                });

                promises.push(promiseUsers, promiseStatus, promiseResult, promiseEvents);
            });
            // Создаем промис для получения данных о спортах для всех записей
            let resultData =  result; // Создаем объект, содержащий массив событий

            // Создаем промис для получения данных о спортах для всех записей

            Promise.all(promises).then(() => {
                res.json(resultData);
                // res.json(result);
            }).catch(error => {
                console.log(error);
                res.status(500).json({error: 'Ошибка при запросе к базе данных'});
            });
        }
    });
}
//     connection.query(query, [EVENT, eventId], (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).json({error: 'Ошибка при поиске учатников'});
//         } else {
//             savedResult = result;
//             if (savedResult.length === 0) {
//                 console.log('Участников нет!');
//                 res.status(404).json({error: 'Участников нет!'});
//                 return;
//             }
//             console.log(savedResult)
//             for (let i = 0; i < savedResult.length; i++) {
//                 console.log(savedResult[i])
//                 connection.query(selectEventsQuery, [EVENTS, savedResult[i].eventsID], (eventErr, eventResult) => {
//                     if (eventErr) {
//                         console.log(eventErr);
//                         res.status(500).json({error: 'Ошибка при поиске информации о мероприятии'});
//                     } else {
//                         if (eventResult.length === 0) {
//                             console.log('Мероприятие с указанным ID не найдено');
//                             res.status(404).json({error: 'Мероприятие с указанным ID не найдено'});
//                             return;
//                         }
//                         console.log(eventResult)
//                         const event = eventResult.nameEvent;
//                         playersInfo[i].event = event;
//                         connection.query(selectUsersQuery, [USERS, savedResult[i].playerID], (playerErr, playerResult) => {
//                             if (playerErr) {
//                                 console.log(playerErr);
//                                 res.status(500).json({error: 'Ошибка при поиске информации о игроке'});
//                             } else {
//                                 if (playerResult.length === 0) {
//                                     console.log('Игрок не найден');
//                                     res.status(404).json({error: 'Игрок не найден'});
//                                     return;
//                                 }
//                                 console.log(playerResult)
//                                 const player = playerResult.name + " " + playerResult.surname + " " + playerResult.patronymic;
//                                 playersInfo[i].player = player;
//                                 connection.query(selectStatusQuery, [STATUS, savedResult[i].status], (statusErr, statusResult) => {
//                                     if (statusErr) {
//                                         console.log(statusErr);
//                                         res.status(500).json({error: 'Ошибка при поиске информации о статусе'});
//                                     } else {
//                                         if (statusResult.length === 0) {
//                                             console.log('Статус не найден');
//                                             res.status(404).json({error: 'Статус не найден'});
//                                             return;
//                                         }
//                                         console.log(statusResult)
//                                         const status = statusResult.name;
//                                         playersInfo[i].statusName = status;
//                                         connection.query(selectResultQuery, [RESULT, savedResult[i].result], (resultErr, resultResult) => {
//                                             if (resultErr) {
//                                                 console.log(resultErr);
//                                                 res.status(500).json({error: 'Ошибка при поиске информации о результате'});
//                                             } else {
//                                                 if (resultResult.length === 0) {
//                                                     console.log('Результат не найден');
//                                                     res.status(404).json({error: 'Результат не найден'});
//                                                     return;
//                                                 }
//                                                 const result = resultResult.name;
//                                                 playersInfo[i].resultName = result;
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//             console.log(playersInfo)
//             if (playersInfo.resultName !== undefined && playersInfo.statusName !== undefined && playersInfo.player !== undefined && playersInfo.event !== undefined) {
//                 res.json(playersInfo);
//             } else {
//                 res.json("Ошибка вывода данных!")
//             }
//         }
//     })
// }

module.exports = {loadUsersForEvent};