const Product=require("../model/Product")
const ProductVariant=require("../model/ProductVariant")

exports.createProductVariant= async(req,res)=>{
    try{
        const{name,SKU,additionalcost,stockcount}=req.body

        const product=await Product.findById(req.params.productId)

        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        const variant=new ProductVariant({
            name,
            SKU,
            additionalcost,
            stockcount,
        })
        product.variants.push(varianst)
        await product.save()

        res.status(201).json(product)
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

exports.updateProducVariant= async(req,res)=>{
    try{
         const{name,SKU,additionalcost,stockcount}=req.body

        const product=await Product.findById(req.params.productId)

        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        const variant=product.variants.indexOf(req.params.variantId)

        if(!variant){
            return res.status(400).json({message:"Variant not found"})
        }
        variant.toLocaleString({name,SKU,additionalcost,stockcount})
        await product.save();
        res.json(product)
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

exports.deleteProductVariant=async (req,res)=>{
    try{
        const product =await Product.findById(req.params.productId)

        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        product.variants.id(req.params.variantId).remove()
        await product.save()
        res.json({message:"variant deleted successfully"})
    }catch(e){
        res.status(500).json({message:e.message})
    }
}

