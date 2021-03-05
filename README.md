# X-Boilerplate by Kaviar

This is a boilerplate created using [X-Framework](https://www.kaviarjs.com/docs/x-framework-introduction) powered by [Kaviar](https://kaviarjs.com).

It's a good idea to understand the [foundation principles](https://www.kaviarjs.com/docs/package-core) first. But feel free to hack away and enjoy!

There are 2 microservices `api` (which is the GraphQL Server) and `ui` (a create react app with typescript and webpack extension capabilities).

You can already start playing with x for the Command-Line by installing `npm i -g @kaviar/x`. [View the options here](https://www.kaviarjs.com/docs/package-x-generator-bundle)

## Requirements:

- [Node 12+](https://github.com/nvm-sh/nvm#install--update-script)
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- Nodemon (`npm install -g nodemon`)

## Features

- Post/Comment/Tag/User relationships modeling a blog
- CRUD interfaces for Post
- Relational data capability ready
- Authentication & Authorisation
- Fixtures to start testing your data in a second.

# Start

For the initial setup just run: scripts/setup.sh. If you run this you don't have to run the setup instructions below.

From root folder, you can start both microservices like: `npm run start:api` and `npm run start:ui`.

## Backend API

Set it up the first time:

```bash
cd microservices/api
cp .env.example .env
npm install
npm run start
```

After it starts go to GraphQL Playground: http://localhost:4000/graphql

You can try your first query in it:

```graphql
query {
  postsFind(query: {}) {
    _id
    title
    comments {
      user {
        profile {
          firstName
        }
      }
    }
  }
}
```

You can start hacking and adding [new stuff fast](https://www.kaviarjs.com/docs/package-x-generator-bundle) with:

```bash
cd microservices/api
x
```

## Frontend API

```bash
cd microservices/ui
npm install
npm start
```

When it starts it will open an endpoint on http://localhost:3000 automatically connected with http://localhost:4000/graphql.

When starting the first time we create some dummy data, meaning you can login with the following credentials on http://localhost:3000/login:

```
admin@app.com : 123456
user-1@app.com : 123456
user-2@app.com : 123456
user-3@app.com : 123456
```
