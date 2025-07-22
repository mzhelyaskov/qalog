-- Insert products
INSERT INTO products (id, name, description, rating, price) VALUES
  (1, 'iPhone 15 Pro', 'Apple smartphone with 48MP camera and USB-C', 5, 1199.99),
  (2, 'MacBook Air M2', 'Lightweight laptop with Apple M2 chip and 13.6" display', 4, 1399.00),
  (3, 'Samsung Galaxy S24', 'Flagship Android smartphone from Samsung', 4, 999.50);

-- Comments for product 1
INSERT INTO comments (content, author_name, likes, dislikes, created_at, product_id) VALUES
  ('Fantastic phone, super fast performance!', 'John', 10, 0, NOW(), 1),
  ('Finally USB-C support! About time.', 'Emily', 5, 1, NOW(), 1);

-- Comments for product 2
INSERT INTO comments (content, author_name, likes, dislikes, created_at, product_id) VALUES
  ('Silent operation and great display.', 'Michael', 7, 0, NOW(), 2),
  ('Perfect for students, light and long battery life.', 'Sophia', 4, 0, NOW(), 2);

-- Comments for product 3
INSERT INTO comments (content, author_name, likes, dislikes, created_at, product_id) VALUES
  ('Android finally caught up with iOS.', 'David', 6, 2, NOW(), 3),
  ('Amazing camera, but a bit overpriced.', 'Olivia', 3, 1, NOW(), 3);