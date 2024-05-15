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
            let resultData =  result;
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

module.exports = {loadUsersForEvent};