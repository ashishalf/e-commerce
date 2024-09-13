# E-Commerce Backend

This is the backend service for an e-commerce application built using **Node.js**, **Express.js**, and **MongoDB**. The backend provides RESTful APIs for user authentication, product management, and shopping cart operations.

## Features

- **User Authentication**: Register, login, and logout functionality using JWT tokens for secure access.
- **Product Management**: Admins can add, update, and delete products.
- **Shopping Cart**: Users can add products to their cart, view the cart, and remove items.
- **Product Image Upload**: Image upload functionality using `Multer` middleware.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: NoSQL database for storing user and product data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT**: JSON Web Tokens for user authentication.
- **Multer**: Middleware for handling file uploads (for product images).


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/e-commerce-backend.git
   cd e-commerce-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:

   ```bash
   PORT=5000
   MONGO_URI=
   JWT_SECRET=
   ```

4. Run the MongoDB server locally or ensure that your MongoDB Atlas instance is running.

## Running the Application

To start the server, run:

```bash
npm start
```

The backend API will be available at `http://localhost:5000`.

## API Endpoints

### 1. **User Authentication**

- **Register**:  
  `POST /api/auth/register`  
  Body:  
  ```json
  {
    "name": "Ashish Kumar",
    "email": "ashish@gmail.com",
    "password": "password123"
  }
  ```
  
- **Login**:  
  `POST /api/auth/login`  
  Body:  
  ```json
  {
    "email": "ashish@gmail.com",
    "password": "password123"
  }
  ```

### 2. **Product Management** (Admin Only)

- **Add Product**:  
  `POST /api/products`  
  Body:  
  ```json
  {
    "name": "Product Name",
    "description": "Product description",
    "price": 99.99
  }
  ```
  Form-Data for image upload:  
  ``` 
  key: image 
  value: [product-image-file]
  ```

- **Get All Products**:  
  `GET /api/products`

- **Get Product by ID**:  
  `GET /api/products/:id`

- **Update Product**:  
  `PUT /api/products/:id`

- **Delete Product**:  
  `DELETE /api/products/:id`

### 3. **Shopping Cart**

- **Add to Cart**:  
  `POST /api/cart`  
  Body:  
  ```json
  {
    "productId": "product_id"
  }
  ```

- **Get Cart**:  
  `GET /api/cart`

- **Remove Item from Cart**:  
  `DELETE /api/cart/:productId`

## Product Image Upload

Product images can be uploaded using the `Multer` middleware. 

## Development

To run the application in development mode with live reloading:

```bash
npm run dev
```
