-- Crear el esquema "shop"
CREATE SCHEMA shop;

SET search_path TO shop;

DROP TABLE Customers CASCADE;
CREATE TABLE Customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    address VARCHAR(200)
);

DROP TABLE Items CASCADE;
CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL (10,2)
);

DROP TABLE Workers CASCADE;
CREATE TABLE Workers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

DROP TABLE Orders CASCADE;
CREATE TABLE Orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES Customers(id),
    courier INT REFERENCES Workers(id),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    full_price DECIMAL (10,2)
);

DROP TABLE OrderDetails CASCADE;
CREATE TABLE OrderDetails (
    order_id INT REFERENCES Orders(id),
    item_id INT REFERENCES Items(id),
    quantity INT,
    PRIMARY KEY (order_id, item_id)
);

DROP FUNCTION shop.calculate_order_total(INTEGER);
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

DROP PROCEDURE shop.update_null_full_prices();
CREATE OR REPLACE PROCEDURE shop.update_null_full_prices() AS $$
DECLARE
    loopID INT;
    calculated_total DECIMAL(10,2);
BEGIN
    FOR loopID IN SELECT id FROM shop.Orders WHERE full_price IS NULL
    LOOP
        calculated_total := shop.calculate_order_total(loopID);
        UPDATE shop.Orders SET full_price = calculated_total WHERE id = loopID;
    END LOOP;
END;
$$ LANGUAGE plpgsql

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

INSERT INTO shop.Orders (customer_id, courier) VALUES
    (FLOOR(RANDOM() * 5) + 1, FLOOR(RANDOM() * 5) + 1),
    (FLOOR(RANDOM() * 5) + 1, FLOOR(RANDOM() * 5) + 1),
    (FLOOR(RANDOM() * 5) + 1, FLOOR(RANDOM() * 5) + 1),
    (FLOOR(RANDOM() * 5) + 1, FLOOR(RANDOM() * 5) + 1),
    (FLOOR(RANDOM() * 5) + 1, FLOOR(RANDOM() * 5) + 1);


INSERT INTO shop.OrderDetails (order_id, item_id, quantity) VALUES
    (1, 2, 5),
    (1, 1, 1),
    (2, 3, 2),
    (3, 5, 1),
    (4, 4, 3),
    (5, 1, 1);


CALL shop.update_null_full_prices();