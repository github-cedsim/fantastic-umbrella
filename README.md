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
    DB_NAME=
    DB_USER=
    DB_PASSWORD=
    DB_PORT=
    DB_HOST=
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

- [Link to Video Walkthrough](https://drive.google.com/file/d/17vg6UsHe-8H7HLEUrPQZ_d5JQlOiOC5G/view?usp=drive_link)


## API Documentation

### Categories

- **Get All Categories**
    - Filepath: `/api/categories`
    - Method: `GET`
    - Response: JSON array of all categories

- **Get Category by ID**
    - Filepath: `/api/categories/:id`
    - Method: `GET`
    - Response: JSON object of the category with the given ID

- **Create a New Category**
    - Filepath: `/api/categories`
    - Method: `POST`
    - Request Body: `{ "category_name": "New Category" }`
    - Response: JSON object of the created category

- **Update a Category by ID**
    - Filepath: `/api/categories/:id`
    - Method: `PUT`
    - Request Body: `{ "category_name": "Updated Category" }`
    - Response: JSON object of the updated category

- **Delete a Category by ID**
    - Filepath: `/api/categories/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

### Products

- **Get All Products**
    - Filepath: `/api/products`
    - Method: `GET`
    - Response: JSON array of all products

- **Get Product by ID**
    - Filepath: `/api/products/:id`
    - Method: `GET`
    - Response: JSON object of the product with the given ID

- **Create a New Product**
    - Filepath: `/api/products`
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
    - Filepath: `/api/products/:id`
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
    - Filepath: `/api/products/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

### Tags

- **Get All Tags**
    - Filepath: `/api/tags`
    - Method: `GET`
    - Response: JSON array of all tags

- **Get Tag by ID**
    - Filepath: `/api/tags/:id`
    - Method: `GET`
    - Response: JSON object of the tag with the given ID

- **Create a New Tag**
    - Filepath: `/api/tags`
    - Method: `POST`
    - Request Body: `{ "tag_name": "New Tag" }`
    - Response: JSON object of the created tag

- **Update a Tag by ID**
    - Filepath: `/api/tags/:id`
    - Method: `PUT`
    - Request Body: `{ "tag_name": "Updated Tag" }`
    - Response: JSON object of the updated tag

- **Delete a Tag by ID**
    - Filepath: `/api/tags/:id`
    - Method: `DELETE`
    - Response: JSON message confirming deletion

