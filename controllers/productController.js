const Product=require("../model/Product")

exports.createProduct=async(req,res)=>{
    try{
        const {name,description,price,variants}=req.body

        const product=new Product({
            name,
            description,
            price,
            variants:variants||[],
        })

        const saveProduct=await product.save()
        res.status(201).json(saveProduct)

    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.updateProduct=async (req,res)=>{
    try{
        const{name,description,price,variants}=req.body

        const updateProduct=await Product.findByIdAndUpdate(
            req.params.id,
            {name,description,price,variants},
            {new:true}

        )
        if(!updateProduct){
            return res.status(404).json({message:'Product not fount'})

        }
        res.json(updateProduct)
    }catch(err){
        res.status(400).json({message:err.message})
    }
}

exports.deletProduct=async (req,res)=>{
    try{
        const deletproduct=await Product.findByIdAndDelete(req.params.id)

        if(!deletproduct){
            return res.status(404).json({message:'Product not found'})
        }
        res.json({message:"product deleted successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

exports.getProductById=async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({message:"product not found"})
        }
        res.json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
