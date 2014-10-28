var mongoose = require('mongoose');
var db = require("./db");
var Order = mongoose.model('Order');


function getAllOrders(callback) {
    Order.find({}, function (err, jokes) {
        if (err) {
            return callback(err);
        }
        callback(null, jokes);
    });
}


module.exports = {
    getAllOrders: getAllOrders
}