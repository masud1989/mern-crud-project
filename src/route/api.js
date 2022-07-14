const express = require('express');
const { CreateProduct, UpdateProduct, DeleteProduct, ReadProducts } = require('../controller/ProductsController');
const router = express.Router();



//Routers
router.post("/CreateProduct", CreateProduct);
router.post("/UpdateProduct/:id", UpdateProduct);
router.get("/ReadProducts", ReadProducts);
router.delete("/DeleteProduct/:id", DeleteProduct);

module.exports = router;