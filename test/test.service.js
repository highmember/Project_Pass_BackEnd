const Sale = require("./test.model").Sale;
const mongoose = require('mongoose');
service = {}

service.all = () => {
    return   Sale.find(); // find and return value to controller
} 
service.insert = (data) => {
    data = new Sale({
        Code: data.Code,
        Name: data.Name,
        Phone: data.Phone
    })
    return data.save(); // insert data in database 
}

module.exports = service // export module for use service in another files