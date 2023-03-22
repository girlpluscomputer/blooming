import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3001/api/',
  cache: new InMemoryCache()
})

export default apolloClient
