# Getting Started with Create React App

## Heroku Deploy commands

- Push last code:`heroku container:push web -a wallmart-ecommerce-front`
- Deploy last version: `heroku container:release web -a wallmart-ecommerce-front`
- Show container logs: `heroku logs --tail -a wallmart-ecommerce-front`

- Deploy and Show logs: `heroku container:push web -a wallmart-ecommerce-front && heroku container:release web -a wallmart-ecommerce-front && heroku logs --tail -a wallmart-ecommerce-front`

## Run Local with docker

- run `docker-compose -f docker-compose.yml.dev run`

## Define Env Vars

- run `cp .env.example .env`

```env
REACT_APP_API_URL=https://young-reef-62489.herokuapp.com
```

## Available Scripts

In the project directory, you can run:

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`
