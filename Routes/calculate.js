let getSalseTax = (price,tax)
    return price*tax/100

let 
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