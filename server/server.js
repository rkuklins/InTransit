import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
schema {
    query: Query2
}
type Query2 {
    greeting: String
    goodbye: String
}

`;


console.log(typeDefs);


const resolvers = {
    Query2: {
        greeting: () => 'Hi World',
        goodbye: () => 'See you!',
    }

};

const server = new ApolloServer( { typeDefs, resolvers});

const serverInfo = await server.listen({port: 9000});
console.log(`Server is running at ${serverInfo.url}`);