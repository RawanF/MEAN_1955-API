const users = require('../controller/users.js');
module.exports = function (app) {
    app.get('/', (req, res) => {
        users.GetAll(req, res);
    });
    app.get('/new/:name/', (req, res) => {
        users.newUser(req, res);
    });
    app.get('/remove/:name/', (req, res) => {
        users.deleteUser(req, res);
    });
    app.get('/:name', (req, res) => {
        users.GetByName(req, res);
    });
}