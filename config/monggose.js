const mongoose=require('mongoose')

//mongoose url
const url='mongodb://127.0.0.1:27017/ProductApi'
mongoose.connect(url)
const db=mongoose.connection

db.once('open',()=>{
    console.log("Database Connected")
})
