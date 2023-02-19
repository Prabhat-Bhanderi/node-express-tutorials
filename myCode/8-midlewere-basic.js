const express = require('express');
const app = express();
const port = 4545

const logger = (req,res,next) => {
    const { method, url } = req
    const time = new Date().getFullYear()
    console.log(method, url, time);
    next()
}

app.get('/', logger,(req, res) => {
    res.send('home')
})
app.get('/about', logger, (req, res) => {
    res.send('about')
})

app.listen(port)
