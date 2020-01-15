# Tasks API

## Prerequisites

* node v12
* nvm (optional)
* docker-compose  (optional)

## Usage

If you don't have local MongoDB instance, you can use provided docker-compose implementation:

``docker-compose up -d`

```
npm install
npm run dev
```

## Create local user

run `node scripts/create-user.js` script or modify it and then run

## Code linting

`npm run lint`

## Testing

`npm test`

In development environment it is useful to run it in watch mode:
`npm run test:watch`

## Todo

* provide more Joi validation
* write more tests
