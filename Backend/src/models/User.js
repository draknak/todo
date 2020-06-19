const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

async function hashPassword (user) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return;
    }

    const hash = await bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.setDataValue('password', hash)
            return null
        })
    })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        },
    })
    
    User.prototype.comparePassword = function comparePassword(password) {
        return bcrypt.compare(password, this.password)
    }

    return User
}