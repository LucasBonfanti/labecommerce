import { user, product, purchase, createUser, getAllUser, createProduct, getAllProduct, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId } from "./database"

// console.log(user)
// console.log(product)
// console.log(purchase)
// createUser( "clienteC", "juca@email.com", "senha360" )
// getAllUser()
// createProduct("p03", "Garrafa", 25, CATEGORY.KITCHEN)
//getAllProduct()
//getProductById("p01")
// queryProductsByName("Panela")
// createPurchase("ClienteA","p02", 1, 70)
getAllPurchasesFromUserId("clienteA")