"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.user = void 0;
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
        id: "produtoA",
        name: "Relógio",
        price: 30,
        category: "utilidades"
    },
    {
        id: "produtoB",
        name: "Panela",
        price: 70,
        category: "cozinha"
    }
];
exports.purchase = [
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
];
//# sourceMappingURL=database.js.map