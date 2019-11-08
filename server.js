const express = require('express');
const app = express();

const product = require('./Routes/product');
app.use("/product",product);

const cart = require('./Routes/cartProducts')
app.use("/getproduct",cart);

app.listen(3000,()=>{
    console.log("server is listening 3000.........")
});