const express = require('express');
const DataBase = require('./models/database/dataBase');
const router = require('./controller/router/router');

const app = new express();

const port = 8080;

DataBase.alertConnection();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(router);

app.listen(port, () => {
    console.log(`server isrunning at ${port}`);
});