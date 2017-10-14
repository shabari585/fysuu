const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    // user_id: {
    //     type: String,
    //     required: true
    // },
    // order_id: {
    //     type: String,
    //     required: true
    // },
    // order_time: {
    //     type: String,
    //     required: true
    // },
    // delivery_address: {
    //     type: String,
    //     required: true
    // },
    // payment_method: {
    //     type: String,
    //     required: true
    // },
    order:{
        type: Object,
        required: true
    }
});

const order = module.exports = mongoose.model('Order', OrderSchema);