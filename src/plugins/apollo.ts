import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_API_ENDPOINT
})

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.error('graphQLErrors', graphQLErrors)
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})

const link = from([errorHandler, httpLink])

const apolloClient = new ApolloClient({
  link,
  cache
})

export { apolloClient }
