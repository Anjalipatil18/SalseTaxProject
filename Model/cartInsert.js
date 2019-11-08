const knex = require('../Model/knex')

let selectData=(name)=>{
    return knex.select("*").from("products").where("product",name)
}

let getProducts=()=>{
    return knex.select("*").from("products")
}

let insertion=(data,quantity,id)=>{
    data["no"]=id
    data["quantity"]=quantity
    price=data["price"]*quantity
    data["priceWithQuantity"]=price
    return knex("cart").insert(data)
}

let getData=((id)=>{
    return knex.select("*").from("cart")
});

module.exports={selectData,insertion,getData,getProducts}