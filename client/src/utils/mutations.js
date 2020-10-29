import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          title
          description
          authors
          link
          image
        }
      }
    }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username, email: $email, password: $password) {
        addUser(username: $username, email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
                
            }
        }
    }
`;

export const SAVE_BOOK = gql`
        mutation saveBook($input: bookInput!) {
            savebook(input: $input) {
                _id
                username
                email
                savedBooks {
                    bookId
                    authors
                    image
                    description
                    title
                    link
                }
            }
        }
    }
`;

