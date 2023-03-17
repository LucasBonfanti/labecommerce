import { user, product, purchase, createUser, getAllUser, createProduct, getAllProduct, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"
import express, { Request, Response } from "express";
import cors from 'cors';


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

