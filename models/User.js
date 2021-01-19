let User = function (data) {
    this.data = data
    this.errors = []
}

User.prototype.create_user = function () {
    //TODO
    console.log(this.data)
}

module.exports = User