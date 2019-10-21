const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json())

var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'Anjali2018@',
      database : 'SalesTaxProject'
    }
})
console.log('database is connected now!');

// knex.schema.createTable('Products', (table) => {
//     table.increments('No')
//     table.string('Product')
//     table.string('Category')
//     table.float('Price')
//     table.float('Tax')
//     table.float('Total')
//     table.string('imported')
//   }).then(() => console.log("table created"))
//     .catch((err) => { console.log(err); throw err })
//     .finally(() => {
//         knex.destroy();
//   });

function getTax(price,tax){
    return price*tax/100
}

app.post('/postProduct',(req,res)=>{
    var categories=["book","food","medicine"]
    var productDetails={Product:req.body.Product,imported:req.body.imported,Category:req.body.Category,Price:req.body.Price,Tax:req.body.Tax,Total:req.body.Total}
    var salseTax=0;
    if(productDetails.imported){
        salseTax+=getTax(productDetails.Price,5);
    }
    if(!categories.includes(productDetails.Category)){
        salseTax+=getTax(productDetails.Price,10);
    }
    
    productDetails["Tax"]=salseTax
    productDetails["Total"]=productDetails.Price+salseTax
    productDetails["imported"]=productDetails.imported.toString()


    knex('Products').insert(productDetails)
    .then((result)=>{
        return res.json({ success: true, message: 'ok' });
    }).catch((err)=>{
        res.send(err)
    });
})  

app.get("/getProduct",function(req,res){
    knex.select("Product","Price","Tax","Total").from("productsBill").then((data)=>{
        taxes=[], prices=[], totalPrices=[], products=[]

        for (product of data){
            products.push(product["Product"])
            taxes.push(product["Tax"])
            prices.push(producti["Price"])
            totalPrices.push(product["Total"])
        }
        count=0
        allProduct=[]
        totalBill={}
        for (var index=0; (index<taxes.length); index++){
            productBill={}
            productBill.product=products[index]
            productBill.price=prices[index]
            productBill.Tax=taxes[index]
            productBill.TotalPrice=totalPrices[index]
            count=count+totalPrices[index]
            allProduct.push(productBill)
        }
        totalBill.grandAmount=count
        allProduct.push(totalBill)
        res.send(allProduct)
    
    }).catch((err)=>{
        res.send(err)
    })
})

app.listen(8001,() =>{
    console.log("listining 8001.... ");
});