const mongoose=require("mongoose")
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
        const product=new Product(productData)
        const saveProduct=await product.save()

        expect(saveProduct).to.have.property('name').equal('Test')

    })
    it('Sucessfull retrive product', async()=>{
        const product=await Product.find();
        expect(product).to.have.an('array')
    })
})