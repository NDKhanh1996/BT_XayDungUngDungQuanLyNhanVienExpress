const HomeModel = require('../models/home.model');

class HomeController {
    static async showHome(req, res) {
        const staffArray = await HomeModel.getStaffData();
        res.render('home', { staffArray: staffArray });
    }

    static async showAdd(req, res) {
        await res.render('add');
    }

    static add(req, res) {
        HomeModel.add(req.body);
        res.redirect('/home');
    }

    static delete(req, res) {
        HomeModel.delete(req.params.id);
        res.redirect('/home');
    }

    static async showUpdate(req, res) {
        const id = req.params.id;
        const staffArray = await HomeModel.getStaffData();
        let staff = {};
        staffArray.forEach(element => {
            if (element.id == id) staff = element;
        });
        res.render('update', { staff: staff });
    }

    static editUpdate(req, res) {
        const staff = req.body;
        const staffId = req.params.id;
        HomeModel.editUpdate(staff, staffId);
        res.redirect('/home');
    }

    static async showInfo(req,res){
        const id = req.params.id;
        const staffArray = await HomeModel.getStaffData();
        let staff = {};
        staffArray.forEach(element => {
            if (element.id == id) staff = element;
        });
        res.render('info', { staff: staff });
    }

    static async addAvatar(req, res){
        const id = req.params.id;
        const staffArray = await HomeModel.getStaffData();
        let staff = {};
        staffArray.forEach(element => {
            if (element.id == id) staff = element;
        });
        HomeModel.addAvatar(id, req.file)
        res.redirect('/home');
    }
}

module.exports = HomeController;