const mongoose = require('mongoose');

const DatesSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        required: true
    }
});

const dates = module.exports = mongoose.model('Dates', DatesSchema);