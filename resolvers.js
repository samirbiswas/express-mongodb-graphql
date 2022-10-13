const User = require("./Models/User")

const resolvers = {
    Query: {
        hello: () => {
            return "Hi, How are you arpa"
        },

        getAllUser: async () => {
            return await User.find()
        },

        getSingleUser: async (parent, args, _context, _info) => {
            const { id } = args
            return await User.findById(id)
        }

    },
    Mutation: {
        createUser: async (_parent, args, _context, _info) => {
            const { username, email, password } = args.post;

            const user = new User({
                username,
                email,
                password
            })
            await user.save()
            return user
        },

        deleteUser: async (_parent, args, _context, _info) => {
            const { id } = args
            await User.findByIdAndDelete(id)
            return "User deleted successfully"
        },

        updateUser: async (_parent, args, _context, _info) => {
            const { id } = args
            const { username, email, password } = args.update;
            const user = await User.findByIdAndUpdate(
                id,
                { username, email, password },
                { new: true }
            );
            return user
        }
    }
}

module.exports = resolvers