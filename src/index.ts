import { user, product, purchase } from "./database"
import express, { Request, Response } from "express";
import cors from 'cors';
import { TProduct, TPurchase, TUser } from "./types";
import {CATEGORY} from "./types"


const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!")
});

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(user)
});

app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(product)
});

app.get("/product/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    
    const result = q 
    ?
     product.filter(item => item.name.toLowerCase().includes(q.toLowerCase()))
    :
    product

    res.status(200).send(result)
});

app.get("/product/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const result:TProduct = product.find((item) => item.id === id)

    res.status(200).send(result)

})

app.get("/users/:id/purchases", (req: Request, res: Response) => {
    const id: string = req.params.id

    const result:TPurchase = purchase.find((item) => item.userId === id)

    res.status(200).send(result)

})


app.post("/users", (req: Request, res: Response) => {
    const id: string = req.body.id
    const email: string = req.body.email
    const password: string = req.body.password

    const newUser: TUser = {id, email, password}

    res.status(201).send("Novo usuário cadastrado!")
});

app.post("/products", (req: Request, res: Response) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const price: number = req.body.price
    const category: CATEGORY = req.body.category

    const newProduct: TProduct = {id, name, price, category}

    res.status(201).send("Novo produto cadastrado!")
});

app.post("/purchases", (req: Request, res: Response) => {
    const userId: string = req.body.userId
    const productId: string = req.body.productId
    const quantity: number = req.body.quantity
    const totalPrice: number = req.body.totalPrice

    const newPurchase: TPurchase = {userId, productId, quantity, totalPrice}

    res.status(201).send("Nova compra realizada!")
});


app.delete("/users/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const index: number = user.findIndex((item) => item.id === id)

    let message: string

    if(index >= 0){
        user.splice(index, 1)
        message = "Usuário apagado com sucesso"
    }else{
        message = "Nenhum usuário encontrado"
    }

    res.status(200).send(message)
})

app.delete("/products/:id", (req: Request, res: Response) => {
    const id: string = req.params.id

    const index: number = product.findIndex((item) => item.id === id)

    let message: string

    if(index >= 0){
        product.splice(index, 1)
        message = "Produto deletado com sucesso"
    }else{
        message = "Nenhum produto encontrado"
    }

    res.status(200).send(message)
})






