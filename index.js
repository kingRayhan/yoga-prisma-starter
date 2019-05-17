const { GraphQLServer } = require('graphql-yoga')
const prisma = require('./prisma/prisma')
require('dotenv').config()
const Query = require('./resolvers/Query/Query')
const Mutation = require('./resolvers/Mutationtation')

const server = new GraphQLServer({
    typeDefs: __dirname + '/schema.graphql',
    resolvers: {
        Query,
        Mutation,
    },
    resolverValidationOptions: {
        requireResolversForResolveType: false,
    },
    context: req => ({
        ...req,
        prisma,
    }),
})

server.start(
    {
        cors: {
            origin: process.env.FRONTEND_URL,
            credentials: true,
        },
        port: process.env.YOGA_SERVER_PORT || 4000,
    },
    ({ port }) =>
        console.log('Graphql server running at http://localhost:' + port)
)
