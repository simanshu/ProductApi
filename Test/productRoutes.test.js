const chai=require('chai')
let chaiHttp=require('chai-http')
const app=require('../index')
const Product=require("../model/Product")


chai.use(chaiHttp)
const expect=chai.expect


describe("Product Model Tests", () => {
    //Test store data
    it("Sucessfull store product",async()=>{
        const productData={
            id:10,
            name:"Test",
            description:"Test",
            price:34000,
            variants:[
                {
                    name:"Test1",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        }
        const res=await chai.request(app).post("/api/product/createproduct").send(productData)
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('name').equal('Test')
    })
    it("sucessfull update a product", async ()=>{
        const product=new Product({
            name:"Test",
            description:"Test",
            price:34000,
            variants:[
                {
                    name:"Test1",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        })
        await product.save()
        const res=await chai.request(app).put("/api/product/"+ product._id).send(product)

        expect(res).to.have.status(200)

    })
    it('Delete a product',async()=>{
        const product=new Product({
            name:"Test",
            description:"Test",
            price:34000,
            variants:[
                {
                    name:"Test1",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        })
        await product.save()
        const res=await chai.request(app).delete("/api/product/"+ product._id)
        expect(res.status).to.equal(200)
    })
})
