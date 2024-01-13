const mongoose=require("mongoose")

const productVariantSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    SKU:{
        type:String,
        require:true
    },
    additionalcost:{
        type:Number,
        default:0
    },
    stockcount:{
        type:Number,
        default:0
    }
})

module.exports=mongoose.model("ProductVariant",productVariantSchema)