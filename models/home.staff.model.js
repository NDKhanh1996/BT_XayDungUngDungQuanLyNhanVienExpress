const BaseModel = require('./base.model');

class HomeStaffModel extends BaseModel {
    static getStaffData() {
        return this.BaseInputSql(`select * from staff`);
    }
}

module.exports = HomeStaffModel;