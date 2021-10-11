import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckuj77v971uaf01z010v12jab/master',
  cache: new InMemoryCache()
})

export default client;
