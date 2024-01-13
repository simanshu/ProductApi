const express=require("express")
const router=express.Router()
const searchController=require("../controllers/searchController")

router.get("/:id",searchController.searchProduct)

module.exports=router