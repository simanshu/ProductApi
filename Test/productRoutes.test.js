const chai=import("chai")
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
        const res=await chai.request(app).post("/api/product").send(productData)
        expect(res).to.have.status(201)
        expect(res.body).to.have.property('name').equal('Test')
    })
    it("sucessfull update a product", async ()=>{
        const productData={
            name:"Test Orignal",
            description:"Test Orignal",
            price:34000,
            variants:[
                {
                    name:"Test1 Orignal",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        }
        const createProduct=await chai.request(app).post('/api/product').send(productData)
        const updateproductData={
            name:"Test update",
            description:"Test update",
            price:34000,
            variants:[
                {
                    name:"Test1 update",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        }
        const res=await chai.request(app).put(`/api/product/${createProduct.body.id}`).send(updateproductData)

        expect(res).to.have.status(200)
        expect(res.body).to.have.property('name').equal('Test update')

    })
    it("sucessfull delete a product", async()=>{
        const productData={
            name:"Test Delete",
            description:"Test Delete",
            price:34000,
            variants:[
                {
                    name:"Test1 Delete",
                    SKU:"test2",
                    additionalcost:78,
                    stockcount:20
                }
            ]
        }
        const createProduct=await chai.request(app).post('/api/product').send(productData)

        const res=await chai.request(app).delete(`/api/product/${createProduct.body.id}`)

        expect(res).to.have.status(200)
        expect(res.body).to.have.property('message').equal('Test Delete')

    })
})