const express = require('express');
const app = express();
const product = require('./product');

app.use("/product",product);

app.listen(3000,()=>{
    console.log("server is listening 3000.........")
});