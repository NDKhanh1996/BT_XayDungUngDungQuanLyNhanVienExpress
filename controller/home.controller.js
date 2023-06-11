const HomeStaffModel = require('../models/home.staff.model');

class HomeController {
    static async showHome(req, res) {
        const staffArray = await HomeStaffModel.getStaffData();
        res.render('home', { staffArray: staffArray });
    }
}

module.exports = HomeController;