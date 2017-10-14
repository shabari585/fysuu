const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    cat_id: {
        type: String,
        required: true
    },
    sub_name: {
        type: String,
        required: true
    },
    item_name: {
        type: String,
        required: true
    },
    item_price: {
        type: String,
        required: true
    },
    item_img: {
        type: String,
        required: true
    }
});

const item = module.exports = mongoose.model('Item', ItemSchema);