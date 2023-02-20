const express = require('express');
const app = express();
const port = 4545
let { people } = require('./data')

//static assets
app.use(express.static('./methods-public'))

app.get('/', (req, res) => {
    res.send('hii')
})
app.get('/api/people', (req, res) => {
    res.status(200).json({success:true,data:people})
})
app.post('/login',(req,res)=>{
    res.send('Post')
})


app.listen(port)