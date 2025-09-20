<h1 align="center">A simplified Jira clone built with React and Node</h1>

![Tech logos](https://i.ibb.co/DVFj8PL/tech-icons.jpg)

![App screenshot](https://i.ibb.co/W3qVvCn/jira-optimized.jpg)

## About this project

I've built this i project in my spare time as a showcase my insights to modern, real-world React codebase.

I hope that this codebase contains enough complexity while still being _relatively_ easy to understand.

## Features

💟 Proven, scalable, and easy to understand project structure

⚛️ Written in modern React, only functional components with hooks

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

```
jira_clone
├─ api
│  ├─ .eslintignore
│  ├─ .eslintrc.json
│  ├─ .prettierrc
│  ├─ package.json
│  ├─ pnpm-lock.yaml
│  ├─ README.md
│  ├─ src
│  │  ├─ constants
│  │  │  ├─ issues.ts
│  │  │  └─ projects.ts
│  │  ├─ controllers
│  │  │  ├─ authentication.ts
│  │  │  ├─ comments.ts
│  │  │  ├─ issues.ts
│  │  │  ├─ projects.ts
│  │  │  ├─ test.ts
│  │  │  └─ users.ts
│  │  ├─ database
│  │  │  ├─ createConnection.ts
│  │  │  ├─ createGuestAccount.ts
│  │  │  ├─ createTestAccount.ts
│  │  │  └─ resetDatabase.ts
│  │  ├─ entities
│  │  │  ├─ Comment.ts
│  │  │  ├─ index.ts
│  │  │  ├─ Issue.ts
│  │  │  ├─ Project.ts
│  │  │  └─ User.ts
│  │  ├─ errors
│  │  │  ├─ asyncCatch.ts
│  │  │  ├─ customErrors.ts
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  ├─ middleware
│  │  │  ├─ authentication.ts
│  │  │  ├─ errors.ts
│  │  │  └─ response.ts
│  │  ├─ routes.ts
│  │  ├─ serializers
│  │  │  └─ issues.ts
│  │  ├─ types
│  │  │  ├─ env.d.ts
│  │  │  └─ express.d.ts
│  │  └─ utils
│  │     ├─ authToken.ts
│  │     ├─ typeorm.ts
│  │     └─ validation.ts
│  ├─ tsconfig-paths.js
│  └─ tsconfig.json
├─ client
│  ├─ .babelrc
│  ├─ .eslintrc.json
│  ├─ .prettierrc
│  ├─ cypress
│  │  ├─ .eslintrc.json
│  │  ├─ integration
│  │  │  ├─ authentication.spec.js
│  │  │  ├─ issueCreate.spec.js
│  │  │  ├─ issueDetails.spec.js
│  │  │  ├─ issueFilters.spec.js
│  │  │  ├─ issuesDragDrop.spec.js
│  │  │  ├─ issueSearch.spec.js
│  │  │  └─ projectSettings.spec.js
│  │  ├─ plugins
│  │  │  └─ index.js
│  │  └─ support
│  │     ├─ commands.js
│  │     ├─ index.js
│  │     └─ utils.js
│  ├─ cypress.json
│  ├─ jest
│  │  ├─ fileMock.js
│  │  └─ styleMock.js
│  ├─ jest.config.js
│  ├─ jsconfig.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ pnpm-lock.yaml
│  ├─ README.md
│  ├─ server.js
│  ├─ src
│  │  ├─ App
│  │  │  ├─ assets
│  │  │  │  └─ fonts
│  │  │  │     ├─ CircularStd-Black.eot
│  │  │  │     ├─ CircularStd-Black.otf
│  │  │  │     ├─ CircularStd-Black.svg
│  │  │  │     ├─ CircularStd-Black.ttf
│  │  │  │     ├─ CircularStd-Black.woff
│  │  │  │     ├─ CircularStd-Black.woff2
│  │  │  │     ├─ CircularStd-Bold.eot
│  │  │  │     ├─ CircularStd-Bold.otf
│  │  │  │     ├─ CircularStd-Bold.svg
│  │  │  │     ├─ CircularStd-Bold.ttf
│  │  │  │     ├─ CircularStd-Bold.woff
│  │  │  │     ├─ CircularStd-Bold.woff2
│  │  │  │     ├─ CircularStd-Book.eot
│  │  │  │     ├─ CircularStd-Book.otf
│  │  │  │     ├─ CircularStd-Book.svg
│  │  │  │     ├─ CircularStd-Book.ttf
│  │  │  │     ├─ CircularStd-Book.woff
│  │  │  │     ├─ CircularStd-Book.woff2
│  │  │  │     ├─ CircularStd-Medium.eot
│  │  │  │     ├─ CircularStd-Medium.otf
│  │  │  │     ├─ CircularStd-Medium.svg
│  │  │  │     ├─ CircularStd-Medium.ttf
│  │  │  │     ├─ CircularStd-Medium.woff
│  │  │  │     ├─ CircularStd-Medium.woff2
│  │  │  │     ├─ jira.svg
│  │  │  │     ├─ jira.ttf
│  │  │  │     └─ jira.woff
│  │  │  ├─ BaseStyles.js
│  │  │  ├─ fontStyles.css
│  │  │  ├─ index.jsx
│  │  │  ├─ NormalizeStyles.js
│  │  │  ├─ Routes.jsx
│  │  │  └─ Toast
│  │  │     ├─ index.jsx
│  │  │     └─ Styles.js
│  │  ├─ Auth
│  │  │  └─ Authenticate.jsx
│  │  ├─ browserHistory.js
│  │  ├─ favicon.png
│  │  ├─ index.html
│  │  ├─ index.jsx
│  │  ├─ Project
│  │  │  ├─ Board
│  │  │  │  ├─ Filters
│  │  │  │  │  ├─ index.jsx
│  │  │  │  │  └─ Styles.js
│  │  │  │  ├─ Header
│  │  │  │  │  ├─ index.jsx
│  │  │  │  │  └─ Styles.js
│  │  │  │  ├─ index.jsx
│  │  │  │  ├─ IssueDetails
│  │  │  │  │  ├─ AssigneesReporter
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ Comments
│  │  │  │  │  │  ├─ BodyForm
│  │  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  │  ├─ Comment
│  │  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  │  ├─ Create
│  │  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  │  ├─ ProTip
│  │  │  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ Dates
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ Delete.jsx
│  │  │  │  │  ├─ Description
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ EstimateTracking
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  ├─ Styles.js
│  │  │  │  │  │  └─ TrackingWidget
│  │  │  │  │  │     ├─ index.jsx
│  │  │  │  │  │     └─ Styles.js
│  │  │  │  │  ├─ index.jsx
│  │  │  │  │  ├─ Loader.jsx
│  │  │  │  │  ├─ Priority
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ Status
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  ├─ Styles.js
│  │  │  │  │  ├─ Title
│  │  │  │  │  │  ├─ index.jsx
│  │  │  │  │  │  └─ Styles.js
│  │  │  │  │  └─ Type
│  │  │  │  │     ├─ index.jsx
│  │  │  │  │     └─ Styles.js
│  │  │  │  └─ Lists
│  │  │  │     ├─ index.jsx
│  │  │  │     ├─ List
│  │  │  │     │  ├─ index.jsx
│  │  │  │     │  ├─ Issue
│  │  │  │     │  │  ├─ index.jsx
│  │  │  │     │  │  └─ Styles.js
│  │  │  │     │  └─ Styles.js
│  │  │  │     └─ Styles.js
│  │  │  ├─ index.jsx
│  │  │  ├─ IssueCreate
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ Styles.js
│  │  │  ├─ IssueSearch
│  │  │  │  ├─ index.jsx
│  │  │  │  ├─ NoResultsSvg.jsx
│  │  │  │  └─ Styles.js
│  │  │  ├─ NavbarLeft
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ Styles.js
│  │  │  ├─ ProjectSettings
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ Styles.js
│  │  │  ├─ Sidebar
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ Styles.js
│  │  │  └─ Styles.js
│  │  └─ shared
│  │     ├─ components
│  │     │  ├─ AboutTooltip
│  │     │  │  ├─ assets
│  │     │  │  │  └─ feedback.png
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Avatar
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Breadcrumbs
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Button
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ ConfirmModal
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ CopyLinkButton.jsx
│  │     │  ├─ DatePicker
│  │     │  │  ├─ DateSection.jsx
│  │     │  │  ├─ index.jsx
│  │     │  │  ├─ Styles.js
│  │     │  │  └─ TimeSection.jsx
│  │     │  ├─ Form
│  │     │  │  ├─ Field.jsx
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Icon
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ index.js
│  │     │  ├─ Input
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ InputDebounced.jsx
│  │     │  ├─ IssuePriorityIcon
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ IssueTypeIcon
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Logo.jsx
│  │     │  ├─ Modal
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ PageError
│  │     │  │  ├─ assets
│  │     │  │  │  └─ background-forest.jpg
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ PageLoader
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ ProjectAvatar.jsx
│  │     │  ├─ Select
│  │     │  │  ├─ Dropdown.jsx
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ Spinner.jsx
│  │     │  ├─ Textarea
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ TextEditedContent
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  ├─ TextEditor
│  │     │  │  ├─ index.jsx
│  │     │  │  └─ Styles.js
│  │     │  └─ Tooltip
│  │     │     ├─ index.jsx
│  │     │     └─ Styles.js
│  │     ├─ constants
│  │     │  ├─ issues.js
│  │     │  ├─ keyCodes.js
│  │     │  └─ projects.js
│  │     ├─ hooks
│  │     │  ├─ api
│  │     │  │  ├─ index.js
│  │     │  │  ├─ mutation.js
│  │     │  │  └─ query.js
│  │     │  ├─ currentUser.js
│  │     │  ├─ deepCompareMemoize.js
│  │     │  ├─ mergeState.js
│  │     │  ├─ onEscapeKeyDown.js
│  │     │  ├─ onOutsideClick.js
│  │     │  └─ queryParamModal.js
│  │     └─ utils
│  │        ├─ api.js
│  │        ├─ authToken.js
│  │        ├─ browser.js
│  │        ├─ dateTime.js
│  │        ├─ javascript.js
│  │        ├─ queryParamModal.js
│  │        ├─ styles.js
│  │        ├─ toast.js
│  │        ├─ url.js
│  │        └─ validation.js
│  ├─ webpack.config.js
│  ├─ webpack.config.production.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
└─ README.md

```