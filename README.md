# Walmart Frontend

[![docentedev](https://circleci.com/gh/docentedev/wallmart-frontend/tree/main.svg?style=svg)](https://circleci.com/gh/docentedev/wallmart-frontend)
[![codecov](https://codecov.io/gh/docentedev/wallmart-frontend/branch/main/graph/badge.svg?token=KMAHZ7P48O)](https://codecov.io/gh/docentedev/wallmart-frontend)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Frontend to Walmart Test

[Demo Project](https://wallmart-ecommerce-front.herokuapp.com/)

## Init project

1. Install dependencies with `npm install`
2. Copy file `cp .env.example .env`
3. Define env vars

   ```env
   REACT_APP_API_URL=https://young-reef-62489.herokuapp.com
   ```

4. Start:
   - Devserver `npm run start`
   - Docker `docker-compose -f "docker-compose.yml" up -d --build`

## Run Test

- `npm run test`

## Deploy on Heroku

- Push last code:`heroku container:push web -a wallmart-ecommerce-front`
- Deploy last version: `heroku container:release web -a wallmart-ecommerce-front`
