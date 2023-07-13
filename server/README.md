# Ergo-App Server

This is the server for the Ergo-App project, a full-stack application with a frontend client and a backend server. This server is built with Node.js, Express, and CORS, and it is intended to be run locally with Nodemon for automatic refreshing.

## Built With

The following tools were used in the building of the server:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/) 
- [CORS](https://expressjs.com/en/resources/middleware/cors.html) 
- [Nodemon](https://nodemon.io/) 

## Getting Started

These instructions will get you a copy of the server up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/download/)

### Installation

1. Navigate into the `server` directory:

    ```bash
    cd your_repository/server
    ```

2. Install NPM packages for the server:

    ```bash
    npm install
    ```

3. Run the server:

    ```bash
    npm run dev
    ```

The server should now be running on your local machine, monitored by Nodemon for any changes.

## Database

Note: As per the aim of this project task, the server is not connected to a MongoDB database or any other external databases. All data management is handled internally within the server.
