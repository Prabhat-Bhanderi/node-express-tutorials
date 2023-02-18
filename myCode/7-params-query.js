const express = require('express');
const { products } = require('./data');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products" >Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((val) => {
        const { id, name, image } = val
        return { id, name, image }
    })
    res.json(newProducts)
})
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params
    const singleProduct = products.find(val => val.id === Number(id))
    if (!singleProduct) {
        return res.status(404).send('Product Not found')
    }
    res.json(singleProduct)
})

// app.get('api/product/:id/reviews/:reviwId', (req, res) => {
//     const { id, reviwId } = req.params
// })

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query
    let sortedProduct = [...products]
    if (search) {
        sortedProduct = sortedProduct.filter(val => {
            return val.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProduct = sortedProduct.splice(0, Number(limit))
    }
    if(sortedProduct.length <1){
        // res.status(200).send('Product Not found as per your search')
        return res.status(200).json({sucess:true,data:[]})
    }
    res.status(200).json(sortedProduct)

})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(4545)