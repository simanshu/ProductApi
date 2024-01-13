const chai=require("chai")
const chaiHttp=require("chai-http")
const app=require("../index")
const Product=require("../model/Product")

chai.use(chaiHttp)
const expect=chai.expect


describe("Product Model Tests", () => {
    // Clear the database before running tests
    before(async () => {
      await Product.deleteMany()
    })

    //Test store data
    it("Sucessfull store product",async()=>{
        const productData={
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
        await Product.create(productData)
    })
    it("sucessfull search for product", async()=>{
        const res=await chai.request(app).get('/api/search?productId=Test')
        expect(res).to.have.status(200)
        expect(res.body).to.be.an('array')
        expect(res.body).to.have.lengthOf(2)
    })
})