const BaseModel = require('./base.model');

class HomeModel extends BaseModel {
    static getStaffData() {
        return this.BaseInputSql(`select * from staff`);
    }

    static async add(staff) {
        await HomeModel.BaseInputSql(`insert into staff (name, age, address, phone, email) values ('${staff.name}', ${staff.age}, '${staff.address}', '${staff.phone}', '${staff.email}');`, err => { throw err });
    }

    static async delete(id) {
        await HomeModel.BaseInputSql(`delete from staff where id = ${id};`, err => { throw err });
    }
}

module.exports = HomeModel;