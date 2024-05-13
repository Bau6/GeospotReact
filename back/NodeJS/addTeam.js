const connection = require('./connect');
const TEAM = "teams"
function addTeam(params, res) {
    let { name, status, event_id } = params; // Деструктурируем только нужные поля из params
    let teamData = { name, status, event_id }; // Создаем новый объект с нужными полями

    // Проверяем уникальность имени команды
    connection.query("SELECT * FROM ?? WHERE name = ?", [TEAM, name], (selectErr, selectResult) => {
        if (selectErr || teamData.name==="") {
            console.log(selectErr);
            res.json({error: 'Ошибка при проверке уникальности имени команды'});
        } else if (selectResult.length > 0) {
            res.json({error: 'Имя команды уже существует. Выберите другое имя.'});
        } else {
            // Если имя уникально, выполняем вставку данных
            let insertQuery = "INSERT INTO ?? SET ?";
            connection.query(insertQuery, [TEAM, teamData], (insertErr, insertResult) => {
                if (insertErr) {
                    console.log(insertErr);
                    res.json({error: 'Ошибка при добавлении записи'});
                } else {
                    res.json({message: 'Запись успешно добавлена'});
                }
            });
        }
    });
}

module.exports = {addTeam};