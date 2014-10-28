var mongoose = require('mongoose');
var db = require("./db");
var OrderDetail = mongoose.model('OrderDetail');


function getOrderDetails(id, callback) {
    OrderDetail.find({ orderId: id }, function (err, jokes) {
        if (err) {
            return callback(err);
        }
        callback(null, jokes);
    });
}


module.exports = {
    getOrderDetails: getOrderDetails
}