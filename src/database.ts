// import { TProduct, TPurchase, TUser,} from "./types";


// enum CATEGORY {
//     ACCESSORIES = "Acessórios",
//     KITCHEN = "Cozinha",
//     ELECTRONICS = "Eletrônicos"
// }

// // export const user: Array<TUser> = [
// //     {
// //         id: "u001",
// //         email: "lucas@email.com",
// //         password: "password123"
// //     },
// //     {
// //         id: "u002",
// //         email: "joao@email.com",
// //         password: "password321"
// //     }
// // ]

// // export const product: Array<TProduct> = [
// //     {
// //         id: "p001",
// //         name: "Relogio",
// //         price: 30,
// //         category: CATEGORY.ACCESSORIES
// //     },
//     {
//         id: "p002",
//         name: "Panela",
//         price: 70,
//         category: CATEGORY.KITCHEN
//     }
// ]

// export const purchase: Array<TPurchase> = [
//     {
//         userId: "u001",
//         productId: "p001",
//         quantity: 2,
//         totalPrice: 60
//     },
//     {
//         userId: "u002",
//         productId: "p002",
//         quantity: 3,
//         totalPrice: 210
//     }
// ]

// export const createUser = (id:string, email:string, password:string) => {
//    const newUser:TUser = {id, email, password}
//    user.push(newUser)
//    return console.log("Cadastro realizado com sucesso!")
// }

// export const getAllUser = () => {
//      console.log(user)
// }

// export const createProduct = (id:string, name:string, price:number, category:CATEGORY) => {
//     const newProduct:TProduct = {id, name, price, category}
//     product.push(newProduct)
//     return console.log("Produto cadastrado com sucesso!")
//  }

//  export const getAllProduct = () => {
//     console.log(product)
// }

// export const getProductById = (idToSearch:string) => {
//     console.log(product.find(product => product.id === idToSearch))
// }

// export const queryProductsByName = (q:string) => {
//     console.log(product.find(product => product.name === q))
// }

// export const createPurchase = (userId:string, productId:string, quantity:number, totalPrice:number) => {
//     const newPurchase:TPurchase = {userId, productId, quantity, totalPrice}
//     purchase.push(newPurchase)
//     console.log(`Última compra: ${newPurchase} Todas as compras ${purchase}`)
//     return console.log("Compra realizada com sucesso")
// }

// export const getAllPurchasesFromUserId = (userIdToSearch:string) => {
//     return console.log(purchase.find(purchase => purchase.userId === userIdToSearch))
// }



