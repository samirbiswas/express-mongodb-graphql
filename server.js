const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const mongoose = require("mongoose")


async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({ app });
    // Database connection
    await mongoose.connect('mongodb://127.0.0.1:27017/sayburgh_solutions_db')
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => console.log(err));

    app.listen(4000, () => { console.log("Server in running on port 4000") })
}

startApolloServer()