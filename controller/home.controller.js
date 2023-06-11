const HomeModel = require('../models/home.model');

class HomeController {
    static async showHome(req, res) {
        const staffArray = await HomeModel.getStaffData();
        res.render('home', { staffArray: staffArray });
    }

    static async showAdd(req, res) {
        res.render('add');
    }

    static async add(req, res) {
        HomeModel.add(req.body);
        res.redirect('/home');
    }

    static async delete(req, res) {
        HomeModel.delete(req.params.id);
        res.redirect('/home');
    }
}

module.exports = HomeController;