-- Crear el esquema "shop"
CREATE SCHEMA shop;

SET search_path TO shop;

CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    address VARCHAR(200)
);

CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL (10,2)
);

CREATE TABLE Workers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES Customers(id),
    courier INT REFERENCES Workers(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    full_price DECIMAL (10,2)
);

CREATE TABLE OrderDetails (
    order_id INT REFERENCES Orders(id),
    item_id INT REFERENCES Items(id),
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);

CREATE OR REPLACE FUNCTION shop.calculate_order_total(order_id INT) RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL(10, 2) := 0;
BEGIN
    SELECT SUM(od.quantity * i.price) INTO total
    FROM shop.OrderDetails od
    JOIN shop.Items i ON od.item_id = i.id
    WHERE od.order_id = order_id;
    
    RETURN total;
END;
$$ LANGUAGE plpgsql;

SET search_path TO public;

INSERT INTO shop.Customers (name, email, address) VALUES
    ('Customer 1', 'customer1@example.com', 'Address 1'),
    ('Customer 2', 'customer2@example.com', 'Address 2'),
    ('Customer 3', 'customer3@example.com', 'Address 3'),
    ('Customer 4', 'customer4@example.com', 'Address 4'),
    ('Customer 5', 'customer5@example.com', 'Address 5');

INSERT INTO shop.Items (name, description, price) VALUES
    ('Item 1', 'Description 1', 11.50),
    ('Item 2', 'Description 2', 53.13),
    ('Item 3', 'Description 3', 2.29),
    ('Item 4', 'Description 4', 15.16),
    ('Item 5', 'Description 5', 5.98);

INSERT INTO shop.Workers (name) VALUES
    ('Worker 1'),
    ('Worker 2'),
    ('Worker 3'),
    ('Worker 4'),
    ('Worker 5');
