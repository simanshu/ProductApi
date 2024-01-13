const express=require("express")
const router=express.Router();

const productRouter=require("./product")
const variantsRouter=require("./productVariantsRouter")
const searchRouter=require("./searchRouter")



router.use("/product",productRouter)
router.use("/product",variantsRouter)
router.use("/search",searchRouter)

module.exports=router;