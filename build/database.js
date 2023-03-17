"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProduct = exports.createProduct = exports.getAllUser = exports.createUser = exports.purchase = exports.product = exports.user = void 0;
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["ACCESSORIES"] = "Acess\u00F3rios";
    CATEGORY["KITCHEN"] = "Cozinha";
    CATEGORY["ELECTRONICS"] = "Eletr\u00F4nicos";
})(CATEGORY || (CATEGORY = {}));
exports.user = [
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
];
exports.product = [
    {
        id: "p01",
        name: "Relogio",
        price: 30,
        category: CATEGORY.ACCESSORIES
    },
    {
        id: "p02",
        name: "Panela",
        price: 70,
        category: CATEGORY.KITCHEN
    }
];
exports.purchase = [
    {
        userId: "clienteA",
        productId: "p01",
        quantity: 2,
        totalPrice: 60
    },
    {
        userId: "clienteB",
        productId: "p02",
        quantity: 3,
        totalPrice: 210
    }
];
const createUser = (id, email, password) => {
    const newUser = { id, email, password };
    exports.user.push(newUser);
    return console.log("Cadastro realizado com sucesso!");
};
exports.createUser = createUser;
const getAllUser = () => {
    console.log(exports.user);
};
exports.getAllUser = getAllUser;
const createProduct = (id, name, price, category) => {
    const newProduct = { id, name, price, category };
    exports.product.push(newProduct);
    return console.log("Produto cadastrado com sucesso!");
};
exports.createProduct = createProduct;
const getAllProduct = () => {
    console.log(exports.product);
};
exports.getAllProduct = getAllProduct;
const getProductById = (idToSearch) => {
    console.log(exports.product.find(product => product.id === idToSearch));
};
exports.getProductById = getProductById;
const queryProductsByName = (q) => {
    console.log(exports.product.find(product => product.name === q));
};
exports.queryProductsByName = queryProductsByName;
const createPurchase = (userId, productId, quantity, totalPrice) => {
    const newPurchase = { userId, productId, quantity, totalPrice };
    exports.purchase.push(newPurchase);
    console.log(`Última compra: ${newPurchase} Todas as compras ${exports.purchase}`);
    return console.log("Compra realizada com sucesso");
};
exports.createPurchase = createPurchase;
const getAllPurchasesFromUserId = (userIdToSearch) => {
    return console.log(exports.purchase.find(purchase => purchase.userId === userIdToSearch));
};
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map