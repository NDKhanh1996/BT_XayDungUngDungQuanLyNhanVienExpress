const mysql = require('mysql');

class DataBase {
    static connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'qlnv',
        charset: 'utf8_general_ci',
    });

    static alertConnection() {
        this.connection.connect((err) => {
            if (err) throw err.message;
            console.log('connect to database success');
        })
    }
}

module.exports = DataBase;