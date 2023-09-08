# this is ArtGallery server side

## user APIs

1. to get all the users [http://localhost:8000/api/v1/auth] - A GET request
2. to create a new user [http://localhost:8000/api/v1/auth] - A POST request
    You will have to send the following json body to get registered
    example:
    {
    "name": "ascsc Name",
    "email": "cascsa@example.com",
    "password": "secretpassword",
    "phone": "12345678901",
    "address": "123 User St"
    }
3. to login with existing user [http://localhost:8000/api/v1/auth] - A POST request
    You will have to send the following json body to get logged in
    example:
    {
    "email": "admin@example.com",
    "password": "secretpassword"
    }

## products APIs

1. get all products [http://localhost:8000/api/v1/products] - A GET request
2. get one product with ID [http://localhost:8000/api/v1/products/1] - A GET request
3. Create a new product [http://localhost:8000/api/v1/products] - A POST request
    You will have to send the following json body to get create product
    {
    "name": "Product skah",
    "description": "A description of Product D.",
    "price": 39.99,
    "stock": 30,
    "image": "product-d.jpg",
    "category": "Toys",
    "status": false
    }
4. Update product using id [http://localhost:8000/api/v1/products] - A PUT request
    send whatever you want to update in a josn file 
    {
         "key": "new Value"
    }
5. delete product by id [http://localhost:8000/api/v1/products/1] - A DELETE request

## Order APIs

1. get all order [http://localhost:8000/api/v1/order] - A GET request
2. create a new order [http://localhost:8000/api/v1/] - A POST request
3. delete order by id [http://localhost:8000/api/v1/order/1] - A DELETE request
4. update order by id [http://localhost:8000/api/v1/1] - A PUT request
    whatever you want to update send it in a JSON format
    example:
    {
    "customer_name": "new name",
    "customer_email": "new email",
    "customer_phone": "new phone number",
    "customer_address": "new address",
    }

## OrderItem APIs

1. get all orderItems [http://localhost:8000/api/v1/item] - A GET request
2. create a new orderItem [http://localhost:8000/api/v1/item] - A POST request
    You will have to send the following json body to get create new OrderItem 
    {
    "product_id": 1,
    "order_id": 1,
    "product_quantity": 6
    }
3. Delete OrderItem with id [[http://localhost:8000/api/v1/item/1] - A DELETE request
