# Swagger Autogen & Express.js API Documentation

[![Express.js](https://img.shields.io/badge/Express.js-4.x-green)](https://expressjs.com/)
[![Swagger](https://img.shields.io/badge/Swagger-Autogen-brightgreen)](https://swagger.io/)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)

This repository demonstrates how to set up **Swagger Auto Generation** with an **Express.js** application. Using this setup, you can automatically generate and host your API documentation with **Swagger UI** and simplify maintaining API documentation for your Node.js projects.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.x or higher)
- [npm](https://www.npmjs.com/) (v9.x or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/abhishekkumar085/swagger-implementation-in-node.git
    cd swagger-implementation-in-node
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Usage

1. Generate the Swagger documentation:
    ```sh
    npm run swagger-autogen
    ```

2. Start the Express.js server:
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000/api-docs` to view the Swagger UI.

### Project Structure

- `src/index.js` - The main application file inside  containing route files.
- `src/swagger.js/` - Directory containing Swagger configuration and output files.

### Scripts

- `npm run swagger-autogen` - Generates the Swagger documentation.
- `npm run dev` - Starts the Express.js server.

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.