const connection = require('./connect');
const {queryDB} = require("./selectEvents");
const TABLE = "events";

function loadEventFromDB(id, res) {
    let query = "SELECT * FROM ?? WHERE id = ?";
    connection.query(query, [TABLE, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({error: 'Ошибка при запросе к базе данных'});
        } else {
            if (result.length > 0) {
                let orgID = result[0].orgID;
                let sportTypeID = result[0].sportTypeID;
                let city = result[0].city;
                let country = result[0].country;
                let gender = result[0].gender;
                let info = result[0];

                let promises = [];

                promises.push(new Promise((resolve, reject) => {
                    queryDB("SELECT name, surname, patronymic FROM ?? WHERE id = ?", ['users', orgID], resultOrgName => {
                        info.orgName = resultOrgName[0].surname + " " + resultOrgName[0].name + " " + resultOrgName[0].patronymic;
                        resolve();
                    });
                }));

                promises.push(new Promise((resolve, reject) => {
                    queryDB("SELECT name FROM ?? WHERE id = ?", ['gender', gender], resultGender => {
                        info.gender = resultGender[0].name;
                        resolve();
                    });
                }));

                promises.push(new Promise((resolve, reject) => {
                    queryDB("SELECT name FROM ?? WHERE id = ?", ['sporttype', sportTypeID], resultSportName => {
                        info.sport = resultSportName[0].name;
                        resolve();
                    });
                }));

                promises.push(new Promise((resolve, reject) => {
                    queryDB("SELECT city FROM ?? WHERE id = ?", ['cities', city], resultCityName => {
                        info.city = resultCityName[0].city;
                        resolve();
                    });
                }));

                promises.push(new Promise((resolve, reject) => {
                    queryDB("SELECT country FROM ?? WHERE id = ?", ['countries', country], resultCountryName => {
                        info.country = resultCountryName[0].country;
                        resolve();
                    });
                }));

                Promise.all(promises).then(() => {
                    res.json(info);
                });
            } else {
                res.status(404).json({error: 'Результат не найден'});
            }
        }
    });
}

module.exports = {loadEventFromDB};
