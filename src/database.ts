import { TProduct, TPurchase, TUser } from "./types";

export const user: Array<TUser> = [
    {
        id: "clienteA",
        email: "lucas@email.com",
        password: "password123"
    },
    {
        id: "clienteB",
        email: "joao@email.com",
        password: "password321"
    }
]

export const product: Array<TProduct> = [
    {
        id: "produtoA",
        name: "Relogio",
        price: 30,
        category: "acessorios"
    },
    {
        id: "produtoB",
        name: "Panela",
        price: 70,
        category: "cozinha"
    }
]

export const purchase: Array<TPurchase> = [
    {
        userId: "clienteA",
        productId: "produtoA",
        quantity: 2,
        totalPrice: 60
    },
    {
        userId: "clienteB",
        productId: "produtoB",
        quantity: 3,
        totalPrice: 210
    }
]