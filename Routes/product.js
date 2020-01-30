const express = require('express');
const product = express.Router()
product.use(express.json())
const add = require('../Model/productInsert')

product.post('/add',(req,res)=>{
    var  productDetails = {
        product:req.body.product,
        price:req.body.price, 
        imported:req.body.imported, 
        category:req.body.category
    }
    let response = add.insertData(productDetails)
    response.then((result)=>{
        return res.json({ success: true, message: 'ok' },productDetails);
    }).catch((err)=>{
        res.send(err)
    });
    });

module.exports=product;
