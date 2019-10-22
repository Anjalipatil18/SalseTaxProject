const express = require('express');
const router = express.Router()
const app = express();
router.use(express.json())
const add = require('./insert')

router.post('/add',(req,res)=>{
    let productDetails = {
        productName:req.body.productName,
        price:req.body.price, 
        imported:req.body.imported,
        category:req.body.category
    }
    let response = add.calculate(productDetails)
    res.json(response)
})
module.exports=router;