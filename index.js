const server = require('./yoga/server')

require('dotenv').config()

server.start(
    {
        port: process.env.YOGA_SERVER_PORT || 4000,
        debug: false,
    },
    ({ port }) => {
        console.log(`Graphql server working at http://localhost:${port}`)
    }
)
