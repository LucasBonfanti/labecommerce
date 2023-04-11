import { user, product, purchase } from "./database"
import express, { Request, Response } from "express";
import cors from 'cors';
import { TProduct, TPurchase, TUser } from "./types";
import {CATEGORY} from "./types"
import { db } from "./database/knex";


const app = express();
app.use(express.json());
app.use(cors());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});


// GET ALL USERS
app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`SELECT * FROM users;`)
        res.status(200).send({result})
    } catch (error) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
    }
});

//GET ALL PRODUCTS
app.get("/products", async (req: Request, res: Response) => {
    try {
        const result = await db.raw(`SELECT * FROM products;`)
        res.status(200).send({result})

    } catch (error) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
        }
    }
});

//GET PRODUCTS BY QUERY (NAME)
app.get("/product/search", async (req: Request, res: Response) => {
   try {
    const q = req.query.q as string
    if(q.length < 1){
        res.status(400)
        throw new Error("O nome do produto tem que ter ao menos um caractere.")
    }

    const productExists: {}[] = await db.raw(`SELECT * FROM products WHERE name = '${q}'`)
    
    if(productExists.length <= 0){
        throw new Error("Esse produto não existe.")
    }

    res.status(200).send({productExists})

    // const result = q 
    // ?
    // product.filter(item => item.name.toLowerCase().includes(q.toLowerCase()))
    // :
    // product

    // res.status(200).send(result)
   } catch (error) {
    console.log(error)
    res.send(error.message)
   }
});

//GET PRODUCTS BY ID
app.get("/product/:id", (req: Request, res: Response) => {
    try {
        const id: string = req.params.id

        const result:TProduct = product.find((item) => item.id === id)

        if(!result){
            res.status(400)
            throw new Error("O produto não existe.")
        }
        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.send(error.message)
        
    }

})

//GET PURCHASES BY USER 
app.get("/users/:id/purchases", (req: Request, res: Response) => {
    try {
        const id: string = req.params.id

        const result:TPurchase = purchase.find((item) => item.userId === id)

        if(!result){
            res.status(400)
            throw new Error("Esse usuário não existe.")
        }

        res.status(200).send(result)

    } catch (error) {
        console.log(error)
        res.send(error.message)
        
    }

})



//CREATE A NEW USER
app.post("/users", (req: Request, res: Response) => {
   try {
    const id: string = req.body.id
    const email: string = req.body.email
    const password: string = req.body.password

    if(typeof id !== "string"){
        res.status(400)
        throw new Error("'id' deve ser do tipo 'string'")
    }
    if(typeof email !== "string"){
        res.status(400)
        throw new Error("'email' deve ser do tipo 'string'")
    }if(typeof password !== "string"){
        res.status(400)
        throw new Error("'password' deve ser do tipo 'string'")}
    
    let indexId = user.findIndex((newUser) => newUser.id == id)
    let indexEmail = user.findIndex((newUser) => newUser.email == email)

    if(indexId < 0 && id[0] == "u"){
        const newUser: TUser = {id, email, password}
        user.push(newUser)
    }else{
        res.status(400)
        throw new Error("Esse 'id' já existe ou não começa com 'u'")
    }

    if(indexEmail < 0){
        const newUser: TUser = {id, email, password}
        user.push(newUser)
    }else{
        res.status(400)
        throw new Error("Esse 'email' já existe ou não é válido")
    }
    
    res.status(201).send("Novo usuário cadastrado!")

   } catch (error) {
    console.log(error)

    res.send(error.message)

    
   }
});

//CREATE A NEW PRODUCT
app.post("/products", (req: Request, res: Response) => {
   try {
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const category: CATEGORY = req.body.category

    if(typeof id !== "string"){
        res.status(400)
        throw new Error("'id' deve ser do tipo 'string'")
    }
    if(typeof name !== "string"){
        res.status(400)
        throw new Error("'name' deve ser do tipo 'string'")
    }if(typeof price !== "number"){
        res.status(400)
        throw new Error("'price' deve ser do tipo 'number'")}

    let indexId = product.findIndex((newUser) => newUser.id == id)

    if(indexId < 0 && id[0] == "p" ){
        const newProduct: TProduct = {id, name, price, category}
        product.push(newProduct)
    }else{
        res.status(400)
        throw new Error("Já existe produto com esse 'id' ou o 'id' do produto não começa com 'p'.")
    }

    res.status(201).send("Novo produto cadastrado!")
    
   } catch (error) {
    console.log(error)

    res.send(error.message)
    
   }
});

//CREATE A NEW PURCHASES
app.post("/purchases", (req: Request, res: Response) => {
  try {

    const userId: string = req.body.userId
    const productId: string = req.body.productId
    const quantity: number = req.body.quantity
    const totalPrice: number = req.body.totalPrice

    if(typeof userId !== "string"){
        res.status(400)
        throw new Error("'userId' deve ser do tipo 'string'")
    }
    if(typeof productId !== "string"){
        res.status(400)
        throw new Error("'productId' deve ser do tipo 'string'")
    }if(typeof quantity !== "number"){
        res.status(400)
        throw new Error("'quantity' deve ser do tipo 'number'")
    }if(typeof totalPrice !== "number"){
        res.status(400)
        throw new Error("'totalPrice' deve ser do tipo 'number'")
    }

    let indexUserId = user.findIndex((item) => item.id == userId)
    let indexProductId = product.findIndex((item) => item.id == productId)

    if(indexUserId < 0){
        res.status(400)
        throw new Error("Usuário não cadastrado.")
    }if(indexProductId < 0){
        res.status(400)
        throw new Error("Produto não cadastrado.")}

    const result:TProduct = product.find((item) => item.id === productId)
    let checkCalculation = quantity*result.price

    if(totalPrice !== checkCalculation ){
        res.status(400)
        throw new Error("O valor do total da compra não está correto.")}

    const newPurchase: TPurchase = {userId, productId, quantity, totalPrice}

    purchase.push(newPurchase)
    
    res.status(201).send("Nova compra realizada!")

  } catch (error) {
    console.log(error)
    res.send(error.message)
  }
});




//EDIT USER BY ID
app.put("/users/:id", (req: Request, res: Response) => {

    try {

      const id: string = req.params.id

      const newEmail:string = req.body.email
      const newPassword:string = req.body.password
      

      const userById:TUser = user.find((item) => item.id === id)

      if(id[0] !== "u"){
        res.status(400)
        throw new Error("O 'id' deve começar com a letra 'u'.")
      }if(!userById){
        res.status(400)
        throw new Error("Este usuário não existe.")}

      if(userById){
        userById.email = newEmail || userById.email
        userById.password = newPassword || userById.password
      }

       res.status(200).send("Cadastro atualizado com sucesso")

    } catch (error) {
        console.log(error)
        res.send(error.message)
        
    }
} )

//EDIT PRODUCT
app.put("/products/:id", (req: Request, res: Response) => {

   try {
    const id: string = req.params.id

    if(id[0] !== "p"){
        res.status(400)
        throw new Error("O 'id' precisa começar com 'p'.")
    }

    const newName:string = req.body.name
    const newPrice:number = req.body.price
    const newCategory: CATEGORY = req.body.category

    
    const productById:TProduct = product.find((item) => item.id === id)

    if(!productById){
        res.status(400)
        throw new Error("Este produto não existe.")
    }
    if(productById){
        productById.name = newName || productById.name
        productById.price = newPrice | productById.price
        productById.category = newCategory || productById.category
    }

    res.status(200).send("Produto atualizado com sucesso")
   } catch (error) {
    console.log(error)
    res.send(error.message)
    
   }
} )



//DELETE USER BY ID
app.delete("/users/:id", (req: Request, res: Response) => {

try {
    const id: string = req.params.id

    const index: number = user.findIndex((item) => item.id === id)
    let message: string

    if(id[0] !== "u"){
        res.status(400)
        throw new Error("O 'id' do usuário deve começar com a letra 'u'")
    } if(index < 0){
        res.status(400)
        throw new Error("Este usuário não existe")
    }if(index >= 0){
        user.splice(index, 1)
        res.status(200).send("Usuário apagado com sucesso")
    }

} catch (error) {
    console.log(error)
    res.send(error.message)
    
}
})

//DELETE PRODUCT BY ID
app.delete("/products/:id", (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
    
        const index: number = product.findIndex((item) => item.id === id)
        let message: string
    
        if(id[0] !== "p"){
            res.status(400)
            throw new Error("O 'id' do produto deve começar com a letra 'p'.")
        } if(index < 0){
            res.status(400)
            throw new Error("Este produto não existe.")
        }if(index >= 0){
            product.splice(index, 1)
            res.status(200).send("Produto apagado com sucesso.")
        }
    
    } catch (error) {
        console.log(error)
        res.send(error.message)
        
    }
    })






