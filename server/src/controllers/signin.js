const {app} = require("../app");
const {User} = require("../models/user");
const {hash} = require("../utils/hash");
const jwt = require('jsonwebtoken')

app.post('/signin', async (req,res) => {
    const userInfo = req.body
    const user = await User.findOne({
        username:userInfo.username,
        password:hash(userInfo.password)
    })

    if(!user) {
        res.status(400).send('false')
        return
    }

    const now = new Date()
    const token = jwt.sign(
        JSON.stringify({
            username:userInfo.username,
            expireAt:now.setHours(now.getHours()+2)
        }),
        '123123',
        {algorithm:'HS256'}
    )

    res.send(token)

})