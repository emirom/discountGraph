CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    discount NUMERIC(3,2),
    price NUMERIC(9,2),
    graph_discount NUMERIC(3,2),
    categoryId int NOT NULL,
    FOREIGN KEY (categoryId) REFERENCES categories(id) ON UPDATE CASCADE
)