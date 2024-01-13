const express=require("express")
const mongodb=require("./config/monggose")
const routes=require("./routers/index")
const app=express()
const port=8090

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/api",routes)

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})