const {
    Express,
    Request,
    Respone
} = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "ONG API Docs",
            version
        },
        servers: [{
            url: 'http://localhost:3000/'
        }],
        apis: ["../routes/*.js"]
    }
}