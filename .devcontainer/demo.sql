-- Create a table for 5 products with product names and prices
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2)
);

INSERT INTO products (name, price) VALUES
  ('Apples', 0.50),
  ('Bananas', 0.30),
  ('Oranges', 0.40),
  ('Peaches', 0.60),
  ('Pears', 0.55);