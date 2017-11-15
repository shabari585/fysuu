const mongoose = require('mongoose');

const DateItemSchema = mongoose.Schema({
    dateItem:{
        type: Object,
        required: true
    }
});

const DateItem = module.exports = mongoose.model('dateItem', DateItemSchema);