const {User} = require("../models/user");
const {hash} = require("../utils/hash");
const {app} = require("../app");


app.post('/signup', async (req,res) => {
    const userInfo = req.body
    const userChecked = await User.findOne({
        username: userInfo.username
    }).exec()

    if (userChecked) {
        res.send('user existed.')
        return
    }

    const user = new User({
        username: userInfo.username,
        password: hash(userInfo.password)
    })
    await user.save()
    res.send('signuped')

})



