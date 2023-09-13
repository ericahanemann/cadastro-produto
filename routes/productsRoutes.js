const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();

router.get("/", ProductController.showProducts);
router.get("/add", ProductController.createProduct);
router.post("/add", ProductController.createProductPost);
router.post("/remove", ProductController.removeProduct);
router.get("/edit/:id", ProductController.updateProduct);
router.post("/edit", ProductController.updateProductPost);

module.exports = router;
