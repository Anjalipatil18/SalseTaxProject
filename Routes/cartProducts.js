const express = require('express');
const cart = express.Router()
cart.use(express.json())
var products = require("./calculate.js")
const cartProducts = require('../Model/cartInsert')

function ProDetail(product){
    var tax=0;
    var price=0;
    var totalPro={};
    var productWithTa=[];
    for (var i=0;  i<product.length; i++){
        var productDetails=products(product[i])
        tax=tax+productDetails["Tax"]
        price=price+productDetails["quantityPrice"]
        productWithTa.push(productDetails)

    }totalPro["totalBill"]=price
    totalPro["totalTax"]=tax

    productWithTa.push(totalPro);
    return productWithTa;

}     

//Get Data...
cart.get('/get',(req,res)=>{
    let response = cartProducts.getProducts()
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})

//Get Data By Name....
cart.get('/get/:name',(req,res)=>{
    var name=req.params.name
    let response = cartProducts.selectData(name)
    response.then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.send(err)
    });
})


cart.get('/:name/:quantity',(req,res)=>{
    var name=req.params.name;
    var quantity=req.params.quantity;
    var id=req.body.no;
    products=cartProducts.selectData(name);
    products.then((data)=>{
        // res.json(data)
    inserting=cartProducts.insertion(data[0],quantity,id);
    return inserting
    }) 
    .then((result)=>{
        res.json(result);
    }).catch((err)=>{
        res.send(err);
    });
})


cart.get("/produts",(req,res)=>{
    var cartProduts=cartProducts.getData()
    cartProduts.then((productsD)=>{
    data=ProDetail(productsD)
    res.json(data)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});

module.exports=cart