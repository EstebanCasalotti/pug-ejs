const express = require('express')

const app = express()


app.set('view engine', 'pug')
app.set('views', './views')

app.get('/datos', (req, res) => {
    res.render('hello2', req.query)
})



app.listen(8000)