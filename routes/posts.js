const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    res.json({
        title: 'My first post',
        text: 'Once upon a time...',
        author: 'Gilberto Falco'
    })
})

module.exports = router