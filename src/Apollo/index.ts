import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

let apolloClient: ApolloClient<NormalizedCacheObject>

const get = () => apolloClient
const init = (options: { getUrl: string }) => {
  if (apolloClient) return apolloClient

  const { getUrl } = options
  if (!getUrl) return

  const cache = new InMemoryCache({
    addTypename: false
  })

  const link: HttpLink = new HttpLink({
    credentials: 'include',
    uri: getUrl
  })

  apolloClient = new ApolloClient({
    link: from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.map(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError) console.log(`[Network error]: ${networkError}`)
      }),
      link
    ]),
    cache,
    connectToDevTools: true
  })

  return apolloClient
}

export const apollo = {
  get,
  init
}
