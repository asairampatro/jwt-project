const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// login
router.post('/login', (req, res) => {
    const userBody = {
        username: 'sairam',
        password: '12345'
    }
    jwt.sign(userBody, '12345', { expiresIn: 1000 }, (err, token) => {
        if (err) {
            res.send(err)
        }
        res.cookie('jwttoken', token)
        res.send({ token })
    })
})

router.get('/', verifyToken, (req, res) => {
    res.send(res)
})

router.get('/data', (req, res) => {
    res.json({message:'hello world'})
})

function verifyToken(req, resp) {
    jwt.verify(req['headers']['authorization'], '12345', (err, res) => {
        if (err) {
            res.send('error')
        }
        resp.send('login')
    })
}

module.exports = router;