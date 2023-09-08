# ArtGallery Server-Side

## User APIs

1. To get all the users - A GET request
   - Endpoint: [http://localhost:8000/api/v1/auth]

2. To create a new user - A POST request
   - Endpoint: [http://localhost:8000/api/v1/auth]
   - JSON Body Example:
     ```json
     {
         "name": "ascsc Name",
         "email": "cascsa@example.com",
         "password": "secretpassword",
         "phone": "12345678901",
         "address": "123 User St"
     }
     ```

3. To log in with an existing user - A POST request
   - Endpoint: [http://localhost:8000/api/v1/auth]
   - JSON Body Example:
     ```json
     {
         "email": "admin@example.com",
         "password": "secretpassword"
     }
     ```

## Products APIs

1. Get all products - A GET request
   - Endpoint: [http://localhost:8000/api/v1/products]

2. Get one product with ID - A GET request
   - Endpoint: [http://localhost:8000/api/v1/products/1]

3. Create a new product - A POST request
   - Endpoint: [http://localhost:8000/api/v1/products]
   - JSON Body Example:
     ```json
     {
         "name": "Product skah",
         "description": "A description of Product D.",
         "price": 39.99,
         "stock": 30,
         "image": "product-d.jpg",
         "category": "Toys",
         "status": false
     }
     ```

4. Update product using ID - A PUT request
   - Endpoint: [http://localhost:8000/api/v1/products]
   - JSON Body Example:
     ```json
     {
         "key": "new Value"
     }
     ```

5. Delete product by ID - A DELETE request
   - Endpoint: [http://localhost:8000/api/v1/products/1]

## Order APIs

1. Get all orders - A GET request
   - Endpoint: [http://localhost:8000/api/v1/order]

2. Create a new order - A POST request
   - Endpoint: [http://localhost:8000/api/v1/order]

3. Delete order by ID - A DELETE request
   - Endpoint: [http://localhost:8000/api/v1/order/1]

4. Update order by ID - A PUT request
   - Endpoint: [http://localhost:8000/api/v1/order/1]
   - JSON Body Example:
     ```json
     {
         "customer_name": "new name",
         "customer_email": "new email",
         "customer_phone": "new phone number",
         "customer_address": "new address"
     }
     ```

## OrderItem APIs

1. Get all order items - A GET request
   - Endpoint: [http://localhost:8000/api/v1/item]

2. Create a new order item - A POST request
   - Endpoint: [http://localhost:8000/api/v1/item]
   - JSON Body Example:
     ```json
     {
         "product_id": 1,
         "order_id": 1,
         "product_quantity": 6
     }
     ```

3. Delete order item with ID - A DELETE request
   - Endpoint: [http://localhost:8000/api/v1/item/1]
