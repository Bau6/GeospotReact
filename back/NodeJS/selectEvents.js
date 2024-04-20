const connection = require('./connect');

function queryDB(query, params, callback) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(callback(result));
            }
        });
    });
}

function selectEvents(params, res) {
    let query = "SELECT * FROM ??";
    connection.query(query, params.events, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            let promises = [];
            result.forEach(row => {
                let orgID = row.orgID;
                let sportTypeID = row.sportTypeID;
                let city = row.city;
                let country = row.country;

                let promiseOrg = queryDB("SELECT name, surname, patronymic FROM ?? WHERE id = ?", [params.user, orgID], resultOrgName => {
                    row.orgName = resultOrgName[0].surname + " " + resultOrgName[0].name + " " + resultOrgName[0].patronymic;
                });

                let promiseSport = queryDB("SELECT name FROM ?? WHERE id = ?", [params.sport, sportTypeID], resultSportName => {
                    row.sport = resultSportName[0].name;
                });

                let promiseCity = queryDB("SELECT city FROM ?? WHERE id = ?", [params.city, city], resultCityName => {
                    row.city = resultCityName[0].city;
                });

                let promiseCountry = queryDB("SELECT country FROM ?? WHERE id = ?", [params.country, country], resultCountryName => {
                    row.country = resultCountryName[0].country;
                });

                promises.push(promiseOrg, promiseSport, promiseCity, promiseCountry);
            });

            Promise.all(promises).then(() => {
                res.json(result);
            }).catch(error => {
                console.log(error);
                res.status(500).json({ error: 'Ошибка при запросе к базе данных' });
            });
        }
    });
}

module.exports = { selectEvents };