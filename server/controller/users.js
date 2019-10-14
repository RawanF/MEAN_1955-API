const mongoose = require('mongoose');
const User = mongoose.model('User');
module.exports = {
    GetAll: function (req, res) {
          User.find()
          .then(data => res.json(data))
          .catch(err => res.json(err));
    },
    newUser: function (req, res) {
        const u = new User();
        u.name=req.params.name;
        u.save()
        .then(console.log("User Created succesfully"))
        .catch(err => res.json(err));
    },
    deleteUser: function (req, res) {
        User.remove({name:req.params.name})
        .then(console.log("User Deleted succesfully"))
        .catch(err => res.json(err));
    },
    GetByName: function (req, res) {
        User.find({name:req.params.name})
        .then(data => res.json(data))
        .catch(err => res.json(err));
    },
}