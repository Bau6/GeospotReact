const connection = require('./connect');
const { queryDB } = require("./selectEvents");
const TEAM = "teams";

function addTeam(params, res) {
    let { name, status, event_id, userId } = params; // Деструктурируем только нужные поля из params
    let teamData = { name, status, event_id, date: new Date() }; // Создаем новый объект с нужными полями

    // Проверяем уникальность имени команды
    connection.query("SELECT * FROM ?? WHERE name = ?", [TEAM, name], (selectErr, selectResult) => {
        if (selectErr || teamData.name === "") {
            console.log(selectErr);
            res.json({ error: 'Ошибка при проверке уникальности имени команды' });
        } else if (selectResult.length > 0) {
            res.json({ error: 'Имя команды уже существует. Выберите другое имя.' });
        } else {
            // Если имя уникально, выполняем вставку данных
            let insertQuery = "INSERT INTO ?? SET ?";
            connection.query(insertQuery, [TEAM, teamData,], (insertErr, insertResult) => {
                if (insertErr) {
                    console.log(insertErr);
                    res.json({ error: 'Ошибка при добавлении записи' });
                } else {
                    let team_id = 0;

                    queryDB("SELECT id FROM ?? WHERE name = ?", [TEAM, params.name], resultTeam => {
                        team_id = resultTeam[0].id;

                        let insertUserTeam = "INSERT INTO ?? SET ?";
                        let userTeamData = { user_id: userId, team_id, status_id: 6, access_id: 1 };//dateStrISO(event.dateStart, DATE_FORMAT_DATE)
                        connection.query(insertUserTeam, ["team_players", userTeamData], (insertErr, insertResult) => {
                            if (insertErr) {
                                console.log(insertErr);
                                res.json({ error: 'Ошибка при добавлении записи' });
                            } else {
                                res.json({ message: 'Запись успешно добавлена' });
                            }
                        });
                    });
                }
            });
        }
    });
}

module.exports = { addTeam };
