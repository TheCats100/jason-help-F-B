const connection = require('../../conf');

const team = {}

team.getAll = (callback) => {
    connection.query('select * from team', (err, results, fields) => {
        callback(err, results, fields)
    })
}

team.post = (formData, callback) => {
    connection.query('insert into team set ?', formData, (err, results, fields) => {
        callback(err, results, fields)
    })
}

module.exports = team;