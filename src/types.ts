export enum CATEGORY {
    ACCESSORIES = "Acessórios",
    KITCHEN = "Cozinha",
    ELECTRONICS = "Eletrônicos"
}

export type TUser = {
    id: string,
    email: string,
    password: string,
    createdAd: string
}

export type TProduct = {
    id: string,
    name: string,
    price: number,
    description: string,
    imageUrl: string
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}