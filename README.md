<h1 align="center">A simplified Jira clone built with React and Node</h1>

![Tech logos](https://i.ibb.co/DVFj8PL/tech-icons.jpg)

![App screenshot](https://i.ibb.co/W3qVvCn/jira-optimized.jpg)

## About this project

I've built this i project in my spare time as a showcase my insights to modern, real-world React codebase.

I hope that this codebase contains enough complexity while still being _relatively_ easy to understand.

## Features

💟 Proven and easy to understand project structure

⚛️ Written in standalone React, only functional components with hooks

🎨 A variety of custom light-weight UI components such as datepicker, modal, various form elements etc

🧩 Simple local React state management, without redux, mobx, or similar

🛠️ Custom webpack setup, without create-react-app or similar

✨ Client written in Babel powered JavaScript

🗄️ API written in TypeScript and using TypeORM

## Setting up development environment

First, install [postgreSQL](https://www.postgresql.org/) if you don't have it already and create a database named `jira_clone_development`

Clone this repo into your local machine

```bash
  git clone https://github.com/oldboyxx/jira_clone.git
```

Create an empty `.env` file in `/api`, copy `/api/.env.example` contents into it, and fill in your database username and password.

Then install the dependencies.

```bash
  npm run install-dependencies
```

Start the api

```bash
  cd api && pnpm start
```

Start the app

```bash
  cd client && pnpm start
```

-  App should now be running on `http://localhost:8080/`

## Running cypress end-to-end tests

-  Set up development environment
-  Create a database named `jira_clone_test` and start the api with

```bash
cd api && pnpm run start:test
```

```bash
cd client && pnpm run test:cypress
```
