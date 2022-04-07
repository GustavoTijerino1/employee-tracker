-- SELECT
--   employee.first_name.last_name AS name, book_prices.price AS price
-- FROM favorite_books
-- JOIN book_prices ON favorite_books.book_price = book_prices.id;


-- SELECT department.name, role.title, employee, Shippers.ShipperName
-- FROM ((Orders
-- INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
-- INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);

-- SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
-- FROM ((Orders
-- INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
-- INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);
