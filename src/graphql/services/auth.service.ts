import gql from 'graphql-tag'

const SIGN_UP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $knownAs: String
    $fullName: String!
    $company: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $name
      fullName: $fullName
      company: $company
    ) {
      accessToken
      refreshToken
    }
  }
`
const SIGNED_IN = gql`
  query signedIn($me: Boolean!) {
    signedIn(me: $me) {
      id
      email
      knownAs
      fullName
      accountId
      account {
        id
        company
      }
    }
  }
`
const SIGN_IN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      accessToken
    }
  }
`
const SIGN_OUT = gql`
  mutation signout {
    signout
  }
`

export default {
  SIGN_UP,
  SIGNED_IN,
  SIGN_IN,
  SIGN_OUT
}
