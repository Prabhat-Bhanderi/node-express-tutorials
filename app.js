const express = require('express');
const app = express();



app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(4545)