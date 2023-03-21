const crypto = require('crypto')

exports.hash = (data) => {
    return crypto.createHash('md5').update(data).digest('hex')
}