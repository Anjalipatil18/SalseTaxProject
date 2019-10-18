const knex = require('./knex');
const express = require('express');
const app = express();
const createTable = require('./createTable');

app.post('/product',(req,res)=>{
    var stageList=["book","medicine","food"]
    var obj={Product:req.body.Product,price:req.body.price,Country:req.body.Country,stage:req.body.stage}
    if(stageList.includes(obj.stage)&&["India"].includes(obj.Country)){
        obj.SalesTaxes=0.00;
        Total=obj.price;
        obj.totalPrice=Total;

    }else if(stageList.includes(obj.stage) && (["OtherCountry"].includes(obj.Country))){
        obj.SalesTaxes=5.00;
        tax=obj.price*obj.SalesTaxes/100;
        obj.SalesTaxes=tax;
        obj.totalPrice=tax+obj.price;

    }else if(["general"].includes(obj.stage)&&(["India"].includes(obj.Country))){
        obj.SalesTaxes=10.00;
        tax=obj.price*obj.SalesTaxes/100;
        obj.SalesTaxes=tax;
        obj.totalPrice=tax+obj.price;

    }else{
        obj.SalesTaxes=15.00;
        tax=obj.price*obj.SalesTaxes/100;
        obj.SalesTaxes=tax;
        obj.totalPrice=tax+obj.price;
    }
    knex.select('*').from('SalesTax').insert(obj)
    .then((result)=>{
        return res.send("Iserted data!!!!...");
    }).catch((err)=>{
        return res.send(err);
    })
})  

app.get("/get_product",(req,res)=>{
    knex.select('totalPrice','price','Product','SalesTaxes').from('SalesTax').then((data)=>{
       res.json("fghjkuytrtyuhgg")
       console.log(data)
       var TotalPrice=0;
       var salesTax=0;
       for (var index of data){
           console.log(index['totalPrice'])
           TotalPrice=TotalPrice+index['totalPrice']
           salesTax=salesTax+index['SalesTaxes']
       }
    }).catch((err)=>{
        res.send("their is something wrong")
    })
})
app.listen(8001,() =>{
    console.log("listining 8001.... ");
});