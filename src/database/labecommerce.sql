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

SELECT * FROM users;

SELECT * FROM products;

SELECT * FROM products
WHERE name='poltrona';

INSERT INTO users
VALUES
("u006", "roberto@email.com", "senha12345" );

INSERT INTO products (id, name, price, category)
VALUES
("p006", "Poltrona Reclinável", 750.00, "moveis");

SELECT * FROM products
WHERE id='p006';

DELETE FROM users WHERE id = "u006";

DELETE FROM products WHERE id = "p006";

SELECT * FROM users
ORDER BY email ASC;

-- get all products versao 1
SELECT * FROM products
ORDER BY price ASC
LIMIT 20
OFFSET 0;

SELECT * FROM products
WHERE price >= 100.00 AND price <= 300.00
ORDER BY price ASC;







