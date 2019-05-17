const Mutation = {
    async createUser(parent, args, { prisma }, info) {
        const newUser = await prisma.mutation.createUser(args, info)
        return newUser
    },
}

module.exports = Mutation
