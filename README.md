# README

Welcome to Jobster!

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=18.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? (https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Clone the repository:

```
git clone https://github.com/hrishikeshchoudhari/jobster
```

Start by installing dependencies:

```
yarn install
```

Then change into that directory and start the development server:

```
cd jobster
yarn rw prisma migrate dev
yarn rw dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page
