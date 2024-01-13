const { default: mongoose } = require("mongoose")
const monggose=require("mongoose")

const productSchema=new monggose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    variants:[{
        name: String,
        sku: String,
        additionalCost: Number,
        stockCount: Number
    }]
})

module.exports=mongoose.model('Product',productSchema)