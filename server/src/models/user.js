const mongoose = require('mongoose')
const User = mongoose.model('User',{
    username:{type:String, index:true},
    password:String,
    chat:[]
})

exports.User = User