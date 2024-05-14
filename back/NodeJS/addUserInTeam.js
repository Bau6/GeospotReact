const connection = require('./connect');
const {queryDB} = require("./selectEvents");
const TEAM = "team_players";

function addPlayer(params, res) {
    let {team_id, user_id} = params; // Деструктурируем только нужные поля из params
    let teamData = {team_id, user_id , status_id: 7, access_id: 1}; // Создаем новый объект с нужными полями

    // Проверяем уникальность имени команды
    connection.query("SELECT * FROM ?? WHERE user_id = ? AND team_id = ?", [TEAM, user_id, team_id], (selectErr, selectResult) => {
        if (selectErr || teamData.team_id === "" || teamData.user_id === "") {
            console.log(selectErr);
            res.json({error: 'Команды не существует!'});
        } else if (selectResult.length > 0) {
            res.json({error: 'Игрок уже присутствует в команде!'});
        } else {
            // Если имя уникально, выполняем вставку данных
            let insertQuery = "INSERT INTO ?? SET ?";
            connection.query(insertQuery, [TEAM, teamData,], (insertErr, insertResult) => {
                if (insertErr) {
                    console.log(insertErr);
                    res.json({error: 'Ошибка при добавлении записи'});
                } else {
                    res.json({message: 'Вы успешно зарегистрированы!'});
                }
            });
        }
    });
}

module.exports = {addPlayer};
