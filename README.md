# Thermo Trains

Automatic detection of isolation deficiencies on rolling trains

## Thermoboard

### Prerequisites

* [PHP 7.1+](https://www.php.net)
* [Composer](https://getcomposer.org)
* [Node.js](https://nodejs.org/en)

### Getting started

Execute the following command to install all the dependencies:

NPM Packages:

    npm install

PHP Composer requirements:
    
    cd api/
    composer install

**Useful commands:**

* Start API and Frontend: `npm start`
* Start API: `npm run start:api`
* Start Frontend: `npm run start:frontend`
* Build: `npm run build`

### Database

You can configure what kind of database you want to use with the file `api/.env`.
If you just use `.env.example` it will use a SQLite database. Initially you have to create an empty file:

    touch api/database/thermoboard.sqlite

### GraphQL

The API implements a GraphQL API.

After you started the backend, you can explore the GraphQL API here using GraphiQL: 
[http://localhost:8080/graphiql](http://localhost:8080/graphiql)
