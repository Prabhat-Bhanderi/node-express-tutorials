const express = require('express');
const app = express();
const port = 4545;

const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');

app.use([logger,authorize]);
// below code apply middleware after all routs of api
// app.use('/api',logger);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome home ${req.user.name}</h1>`)
})
app.get('/about', (req, res) => {
    res.send('about')
})
app.get('/api/products', logger, (req, res) => {
    res.send('Products API')
})
app.get('/api/items', logger, (req, res) => {
    res.send('Items API')
})

app.listen(port)
