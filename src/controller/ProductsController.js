const ProductsModel = require("../model/ProductsModel");

// Create Product 
exports.CreateProduct =(req, res)=> {
    const reqBody = req.body;
    ProductsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Failed", data:err})
        }
        else{
            res.status(200).json({status:"Insert Success", data:data})
        }
    })
}

// Read All Product 
exports.ReadProduct =(req, res)=> {
    const Query = {};
    const Projection = "ProductName ProductCode Image UnitPrice Qty TotalPrice";
    ProductsModel.find(Query, Projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"Failed", data:err})
        }
        else{
            res.status(200).json({status:"Read Data Success", data:data})
        }
    })
}

// Update any Product 
exports.UpdateProduct =(req, res)=> {
    const id = req.params.id;
    const Query = {_id:id};
    const reqBody = req.body;
    
    ProductsModel.updateOne(Query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Failed", data:err})
        }
        else{
            res.status(200).json({status:"Update Data Success", data:data})
        }
    })
}

// Delete any Product 
exports.DeleteProduct =(req, res)=> {
    const id = req.params.id;
    const Query = {_id:id};
    
    ProductsModel.remove(Query,  (err, data)=>{
        if(err){
            res.status(400).json({status:"Failed", data:err})
        }
        else{
            res.status(200).json({status:"Deleting Data Success", data:data})
        }
    })
}