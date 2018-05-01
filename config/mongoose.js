const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/test';

mongoose.Promise = global.Promise;
mongoose.connect(url);

exports.connect = () => {
    return mongoose.connection;
}