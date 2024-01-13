const express=require("express")
const router=express.Router();
const productVariantController=require("../controllers/productVariantController")

router.post("/:productId/variants",productVariantController.createProductVariant)
router.put("/:productId/variants/:variants:Id",productVariantController.updateProducVariant)
router.delete("/:productId/variants/:variantId",productVariantController.deleteProductVariant)

module.exports=router