const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    id:ID,
    username:String,
    email:String
}

    type Query{
        hello: String
        getAllUser : [User]
        getSingleUser(id:ID): User 
    }

input UserInput {
    username: String
    email: String
    password: String
}

input UpdateUserInput {
    username: String
}

type Mutation {
    createUser(post:UserInput): User
    deleteUser(id:ID): String
    updateUser(id:ID, update : UpdateUserInput): User
}

`
module.exports = typeDefs