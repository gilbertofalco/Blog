const express = require('express')
const router = express.Router()

router.get('/comments/:postId', (req, res) => {
    res.json({
        text: 'My comment',
        author: 'BettoFalco'
    })
})

module.exports = router