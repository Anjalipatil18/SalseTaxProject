const express = require('express');
const router = express.Router()
const app = express();
router.use(express.json())
const add = require('./Model/insert')

router.post('/add',(req,res)=>{
    let productDetails = {
        product:req.body.product,
        price:req.body.price, 
        imported:req.body.imported,
        category:req.body.category
    }
    productDetails['imported']=productDetails.imported.toString();
    let response = add(productDetails)
    res.json(response)
})

router.get('/get',(req,res)=>{
    let response = add(productDetails)
    res.send(response)
    })

module.exports=router;