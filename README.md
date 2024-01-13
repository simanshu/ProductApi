# ProductApi
This is node js project where user can create product and its variants too and do some CRUD opreations using Express and mongoose and also postman

Deliverables
Step-1:first step node js project (npm init -y) 
step-2:Install all needed depandency like mongoose,express,nodemon
step-3:Step-up index.js file require express and mongoose and start server
step-4:Create model product and product variants
step-5:Create controller product and product variants and also searchproduct
step-6:Create router and all router has sparate file and then create a index.js file where all router require first and then use it and exports to main index.js
step-7:Require router to routes object and use in main index.js file 
step-8:Run the code using npm start (i setted it in packege-json start nodemon index.js) and also start mongodb compass
step-9:Create APIs in Postman 
  |-http://localhost:8090/api/product/createproduct
    |-this api for create a product method is POST
  |-http://localhost:8090/api/product/:producId/variants
    |-this api for create productvariant Method is POST
  |-http://localhost:8090/api/product/:id
    |-this api for update product method is PUT
  |-http://localhost:8090/api/product/:id
    |-this for delete product Method is DELETE
  |-http://localhost:8090/api/product/:productId/variants/:variants:Id
    |-this api for product productvariant update Method is PUT
  |-http://localhost:8090/api/product/:productId/variants/:variants:Id
    |-this api for delete productvariant Method use is DELETE
  |-http://localhost:8090/api/search/:id
    |-this api for searchProduct by ID Method use is GET
    
    
    
