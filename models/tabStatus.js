const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const TabStatusSchema = mongoose.Schema({
    tab: {
        type: String,
        required: true
    },
    status:{
        type: Boolean,
    }
});

const TabStatus = module.exports = mongoose.model('TabStatus', TabStatusSchema);
