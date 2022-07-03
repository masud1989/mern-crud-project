const express = require('express');
const { CreateProduct, ReadProduct, UpdateProduct, DeleteProduct } = require('../controller/ProductsController');
const router = express.Router();



//Routers
router.post("/CreateProduct", CreateProduct);
router.post("/UpdateProduct/:id", UpdateProduct);
router.get("/ReadProduct", ReadProduct);
router.delete("/DeleteProduct/:id", DeleteProduct);

module.exports = router;