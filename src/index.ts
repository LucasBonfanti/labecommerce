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