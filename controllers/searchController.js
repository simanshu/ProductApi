const Product=require("../model/Product")


exports.searchProduct=async (req,res)=>{
    try{
        const productId=req.params.id

        const product=await Product.findById(productId)

        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({
            body:product
        })
    }catch(e){
        res.status(400).json({message:e.message})
    }

}