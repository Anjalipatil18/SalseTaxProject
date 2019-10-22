const knex=require('./knex')
const express = require('express');
const router = express.Router()
const app = express();
app.use(express.json())

router.post('/add',(req,res)=>{
    var categories=["book","food","medicine"]
    var productDetails = {productName:req.body.productName, price:req.body.price, imported:req.body.imported, category:req.body.category}

})

module.exports=product;