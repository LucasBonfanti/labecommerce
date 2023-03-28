-- Active: 1680028472652@@127.0.0.1@3306
CREATE TABLE users(
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);


INSERT INTO users (id, email, password)
VALUES
("u001", "lucas@email.com", "senha2022"),
("u002", "joao@email.com", "2023senha"),
("u003", "joana@email.com", "senha123");

SELECT * FROM users;

CREATE TABLE products(
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

INSERT INTO products (id, name, price, category)
VALUES
("p001", "Notebook Acer", 2500.50, "informatica"),
("p002", "Celular Samsung S23+", 3000.00, "celulares"),
("p003", "Camiseta Jordan", 80.99, "vestuario"),
("p004", "Converse All Star", 250.00, "vestuario"),
("p005", "Cadeira Escritório", 1000.00, "moveis");

SELECT * FROM products;