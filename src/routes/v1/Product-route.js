const express = require("express")
const {validateCreateRequest} = require("../../middlewares/Product-middlewares")

// const {ProductController} = require("../../controllers")
const router = express.Router()



// router.post("/",validateCreateRequest, ProductController.createProducts);

// router.get("/",ProductController.getProducts);

// router.get("/:id",ProductController.getProductsById);

// router.put("/:id",ProductController.updateProducts);

// router.delete("/:id",ProductController.deleteProducts);



module.exports = router