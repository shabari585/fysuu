const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AdminSchema = mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = (id, callback) => {
    Admin.findById(id, callback);
}

module.exports.getAdminByAdminname = (adminname, callback) => {
    const query = { adminname: adminname }
    Admin.findOne(query, callback);
}

module.exports.addAdmin = (newAdmin, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) throw err;
            newAdmin.password = hash;
            newAdmin.save(callback);
        })
    })
}


module.exports.comparePassword = (adminPassword, hash, callback) => {
    bcrypt.compare(adminPassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}