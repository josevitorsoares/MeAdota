 const User = require('../models/User') 

let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create = function () {
    //TODO
    console.log(this.data)
}

module.exports = User