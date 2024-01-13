const express=require('express')
const router=express.Router()
const productController=require("../controllers/productController")

router.post("/createproduct",productController.createProduct)
router.put("/:id",productController.updateProduct)
router.delete("/:id",productController.deletProduct)
router.get("/:id",productController.getProductById)

module.exports=router