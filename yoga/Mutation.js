const { isEmail } = require('validator')
const { hashSync } = require('bcryptjs')
const Mutation = {
    async createUser(parent, args, { prisma }, info) {
        if (!isEmail(args.data.email)) return new Error('Invalid email address')

        args.data.password = hashSync(args.data.password)

        return await prisma.mutation.createUser(args, info)
    },
    async updateUser(parent, args, { prisma }, info) {
        if (!isEmail(args.data.email)) return new Error('Invalid email address')

        args.where = {
            id: args.userId,
        }

        return await prisma.mutation.updateUser(args, info)
    },
}

module.exports = Mutation
