var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/northwind';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

/** ORDER SCHEMA ** */
var OrderSchema = mongoose.Schema({
    _id: Number,
    customerId: String,
    employeeId: Number,
    orderDate: String,
    requiredDate: String,
    shippedDate: String,
    shipVia: String,
    freight: Number,
    shipName: String,
    shipAddress: String,
    shipCity: String,
    shipRegion: String,
    shipPostalCode: String,
    shipCountry: String
});

/** ORDERDETAIL SCHEMA ** * */
var DetailsSchema = mongoose.Schema({
    orderId: Number,
    productId: Number,
    unitPrice: Number,
    quantity: Number,
    discount: Number
});

mongoose.model('Order', OrderSchema);
mongoose.model('OrderDetail', DetailsSchema);
