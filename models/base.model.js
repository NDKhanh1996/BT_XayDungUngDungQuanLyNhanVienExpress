const DataBase = require('./database/dataBase');

class BaseModel extends DataBase {
    static BaseInputSql(sql) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, (err, result) => {
                err ? reject(err) : resolve(result);
            });
        });
    }
}

module.exports = BaseModel;