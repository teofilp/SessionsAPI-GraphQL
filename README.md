# GraphQL Speaker Session API

This is a GraphQL API for managing speakers and their sessions for a fictional event. It is built using JavaScript and utilizes Apollo Server for creating the GraphQL API. The API also integrates with an external API for retrieving speaker data, which is connected to the GraphQL API using Apollo Server Rest Data Source.

## Features

- **Speakers:** Retrieve information about speakers participating in the event, including their names, biographies, and contact details.
- **Sessions:** Get details about various sessions offered at the event, such as session titles, descriptions, time slots, and locations.
- **Create Sessions:** Add new sessions to the event or update existing session details.
- **Favorites:** Mark sessions as favorites for easy access and reference.

## Technologies Used

- **JavaScript:** The entire API is written in JavaScript, making it easy to understand and modify.
- **Apollo Server:** The API utilizes Apollo Server, a popular GraphQL server implementation, for handling GraphQL queries and mutations efficiently.
- **Apollo Server Rest Data Source:** It integrates with an external API for retrieving speaker data, leveraging the power of Apollo Server Rest Data Source to seamlessly connect the two APIs.
- **GraphQL:** The API is built on the GraphQL query language, providing a flexible and efficient way to request data.
- **Node.js:** The API runs on Node.js, ensuring a fast and scalable server-side environment.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. The API will be accessible at `http://localhost:4000/`.

## API Documentation

To explore and interact with the GraphQL API, you can use a tool like **GraphQL Playground** or **GraphiQL**. Visit `http://localhost:4000` in your web browser to access the interactive API documentation and test queries, mutations, and subscriptions.

## Examples

### Get all speakers

```graphql
query {
  speakers{
    id
    name
    bio
  }
}
```

### Get all sessions
```graphql
query {
  sessions {
    id
    title
    description
    track
    level
    format
  }
}
```

### Add New Session 

```graphql
mutation {
  addNewSession(session: {
    title:"test",
    description:"test"
  }) {
    id
    title
    description
  }
}
```