const Query = {
    async users(parent, args, { prisma }, info) {
        return await prisma.query.users(args, info)
    },
}

module.exports = Query
