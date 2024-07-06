const connection = require('./connect');
const TEAM = "team_players";
const USERS = 'users';
const STATUS = 'statuses_for_team';
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

function loadTeamPlayers(params, res) {
    let query = "SELECT * FROM ?? WHERE team_id = ?";
    connection.query(query, [TEAM, params.team_id], (err, teamsResult) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
            return;
        }

        let teamsInfoPromises = teamsResult.map(team => {
            let statusName = "";
            let playerName = "";

            let playerPromise = queryDB("SELECT * FROM ?? WHERE id = ?", [USERS, team.user_id])
                .then(teamPlayerResult => {
                    if (teamPlayerResult.length > 0) {
                        playerName = teamPlayerResult[0].name + " " + teamPlayerResult[0].surname + " " + teamPlayerResult[0].patronymic;
                    }
                });

            let statusPromise = queryDB("SELECT * FROM ?? WHERE id = ?", [STATUS, team.status])
                .then(teamStatusResult => {
                    if (teamStatusResult.length > 0) {
                        statusName = teamStatusResult[0].name;
                    }
                });

            return Promise.all([playerPromise, statusPromise])
                .then(() => {
                    return { playerName, statusName };
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

module.exports = { loadTeamPlayers };