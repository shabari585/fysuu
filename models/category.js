const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    subs: {
        type: Array,
        required: false
    }

});

const category = module.exports = mongoose.model('Category', CategorySchema);