function getSalseTax(price,tax){
    return price*tax/100
}
var productTax=(productDetails)=>{
    var salseTax=0;
    categories=["medicine","food","book"]
    if(productDetails.imported){
        salseTax+=getSalseTax(productDetails.Price,5);
    }
    if(!categories.includes(productDetails.Category)){
        salseTax+=getSalseTax(productDetails.Price,10);
    }
    productDetails["Tax"]=salseTax
    productDetails["Total"]=productDetails.Price+salseTax
    productDetails["imported"]=productDetails.imported.toString()
}

module.exports=productTax
