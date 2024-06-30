Sure! Here's a sample README file based on the criteria and information provided for your project. This README file will include sections for project description, installation, usage, walkthrough video links, and API documentation.

---

# Fantastic Umbrella E-Commerce Backend

## Description

This project is a backend application for an e-commerce site. It uses Express.js for the server, Sequelize as the ORM, and MySQL as the database. The application provides APIs to manage products, categories, and tags.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Videos](#walkthrough-videos)
- [API Documentation](#api-documentation)
  - [Categories](#categories)
  - [Products](#products)
  - [Tags](#tags)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/fantastic-umbrella.git
    cd fantastic-umbrella
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    DB_NAME=t5y6q5z89ntlmipk
    DB_USER=enujjauk83jhi9kj
    DB_PASSWORD=pbvy0dopfv124bg5
    DB_PORT=3306
    DB_HOST=h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
    DB_DIALECT=mysql
    ```

4. Create the database schema and seed the database:
    ```sh
    npm run schema
    npm run seed
    ```

5. Start the application:
    ```sh
    npm start
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. Use Insomnia Core to test the API endpoints.

## Walkthrough Videos

- [Link to Video Walkthrough](https://)


## API Documentation

### Categories

- **Get All Categories**
    - URL: `/api/categories`
    - Method: `GET`
    - Response: JSON array of all categories

- **Get Category by ID**
    - URL: `/api/categories/:id`
    - Method: `GET`
    - Response: JSON object of the category with the given ID

- **Create a New Category**
    - URL: `/api/categories`
    - Method: `POST`
    - Request Body: `{ "category_name": "New Category" }`
    - Response: JSON object of the created category

- **Update a Category by ID**
    - URL: `/api/categories/:id`
    - Method: `PUT`
    - Request Body: `{ "category_name": "Updated Category" }`
    - Response: JSON object of the updated category

- **Delete a Category by ID**
    - URL: `/api/categories/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

### Products

- **Get All Products**
    - URL: `/api/products`
    - Method: `GET`
    - Response: JSON array of all products

- **Get Product by ID**
    - URL: `/api/products/:id`
    - Method: `GET`
    - Response: JSON object of the product with the given ID

- **Create a New Product**
    - URL: `/api/products`
    - Method: `POST`
    - Request Body:
      ```json
      {
        "product_name": "New Product",
        "price": 100.00,
        "stock": 10,
        "category_id": 1,
        "tagIds": [1, 2]
      }
      ```
    - Response: JSON object of the created product

- **Update a Product by ID**
    - URL: `/api/products/:id`
    - Method: `PUT`
    - Request Body:
      ```json
      {
        "product_name": "Updated Product",
        "price": 150.00,
        "stock": 20,
        "category_id": 2,
        "tagIds": [3, 4]
      }
      ```
    - Response: JSON object of the updated product

- **Delete a Product by ID**
    - URL: `/api/products/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

### Tags

- **Get All Tags**
    - URL: `/api/tags`
    - Method: `GET`
    - Response: JSON array of all tags

- **Get Tag by ID**
    - URL: `/api/tags/:id`
    - Method: `GET`
    - Response: JSON object of the tag with the given ID

- **Create a New Tag**
    - URL: `/api/tags`
    - Method: `POST`
    - Request Body: `{ "tag_name": "New Tag" }`
    - Response: JSON object of the created tag

- **Update a Tag by ID**
    - URL: `/api/tags/:id`
    - Method: `PUT`
    - Request Body: `{ "tag_name": "Updated Tag" }`
    - Response: JSON object of the updated tag

- **Delete a Tag by ID**
    - URL: `/api/tags/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

