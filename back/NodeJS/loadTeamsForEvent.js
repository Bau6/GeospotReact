const connection = require('./connect');
const TEAMS = "teams";
const USERS = 'users';
const STATUS = 'statuses_for_team';
const RESULT = 'results_for_team';
const ACCESS = 'access_for_team';
const TEAM_PLAYERS = "team_players";
function queryDB(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function loadTeamsForEvent(eventId, res) {
    let query = "SELECT * FROM ?? WHERE event_id = ?";
    connection.query(query, [TEAMS, eventId], (err, teamsResult) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
            return;
        }

        let teamsInfoPromises = teamsResult.map(team => {
            let name = team.name;
            let date = team.date;
            let id = team.id;
            let statusName = "";
            let resultName = "";
            let resultID = team.result;
            queryDB("SELECT * FROM ?? WHERE id = ?", [STATUS, team.status])
                .then(teamStatusResult => {
                    if (teamStatusResult.length > 0) {
                        statusName = teamStatusResult[0].name;
                    }})
            queryDB("SELECT * FROM ?? WHERE id = ?", [RESULT, team.result])
                .then(teamResult => {
                    if (teamResult.length > 0) {
                        resultName = teamResult[0].name;

                    }})

            return new Promise((resolve, reject) => {
                queryDB("SELECT * FROM ?? WHERE team_id = ?", [TEAM_PLAYERS, team.id])
                    .then(teamPlayersResult => {
                        if (teamPlayersResult.length > 0) {
                            const playerPromises = teamPlayersResult.map(player => {
                                const userID = player.user_id;
                                const statusID = player.status_id;
                                const accessID = player.access_id;
                                return Promise.all([
                                    queryDB("SELECT name, surname, patronymic FROM ?? WHERE id = ?", [USERS, userID]),
                                    queryDB("SELECT name FROM ?? WHERE id = ?", [STATUS, statusID]),
                                    queryDB("SELECT name FROM ?? WHERE id = ?", [ACCESS, accessID])
                                ]).then(([userNameResult, statusResult, accessResult]) => {
                                    return {
                                        player: userNameResult[0].surname + " " + userNameResult[0].name + " " + userNameResult[0].patronymic,
                                        nameStatus: statusResult[0].name,
                                        nameAccess: accessResult[0].name
                                    };
                                });
                            });

                            Promise.all(playerPromises)
                                .then(playersInfo => {
                                    let teamInfo = {
                                        players: playersInfo,
                                        name: name,
                                        statusName: statusName,
                                        date: date,
                                        team_id: id,
                                        result: resultName,
                                        resultID: resultID,
                                    };
                                    resolve(teamInfo);
                                })
                                .catch(err => {
                                    reject(err);
                                });
                        } else {
                            reject('Нет данных для команды');
                        }
                    })
                    .catch(err => {
                        reject(err);
                    });
            });
        });

        Promise.all(teamsInfoPromises)
            .then(teamsInfo => {
                res.json(teamsInfo);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
            });
    });
}

module.exports = { loadTeamsForEvent };
