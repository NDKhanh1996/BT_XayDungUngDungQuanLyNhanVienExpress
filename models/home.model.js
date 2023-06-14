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

    static async editUpdate(staff, staffId) {
        await HomeModel.BaseInputSql(`update staff set name = '${staff.name}', age = ${staff.age}, address = '${staff.address}', phone = '${staff.phone}', email = '${staff.email}' where id = ${staffId};`, err => { throw err });
    }

    static async addAvatar(id, path) {
        await HomeModel.BaseInputSql(`update staff set avatar = '${path}' where id = ${id};`, err => { throw err })
    }
}

module.exports = HomeModel;