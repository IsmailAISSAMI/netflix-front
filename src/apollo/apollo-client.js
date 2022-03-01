import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: `${NEXT_PUBLIC_API_URLAPI_URL}graphql`,
    cache: new InMemoryCache()
})

export default client;