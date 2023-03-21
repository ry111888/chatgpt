const {app} = require('../app')
const axios = require('axios')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const {User} = require("../models/user");

dotenv.config()
const apiToken = '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'
//console.log(apiToken)


app.post('/chat', async (req, res) => {
    const userToken = req.headers.token
    if (!userToken){
        res.status(400).send('No token')
        return
    }
    const tokenInfo =jwt.verify(userToken,'123123')
    if (!userToken){
        res.status(400).send('Invalid token')
        return
    }
    const tokenExpire = new Date(tokenInfo.expireAt)
    const now = new Date()
    if (tokenExpire < now) {
        res.status(401).send('Token expired')
        return
    }
    let messages = req.body.messages
    const postResult = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: messages
    }, {headers: {Authorization: `Bearer ${apiToken}`}})



    const replyMsg = postResult.data.choices[0].message
    messages.push(replyMsg)

    const user = await User.findOne({username: tokenInfo.username}).exec()
    user.chat=messages
    await user.save()
    res.send(replyMsg)


})
