# Getting Started with Create React App

## Deployment commands

- Push last code:`heroku container:push web -a wallmart-ecommerce-front`
- Deploy last version: `heroku container:release web -a wallmart-ecommerce-front`
- Show container logs: `heroku logs --tail -a wallmart-ecommerce-front`

## Define Env Vars

```env
REACT_APP_API_URL=https://young-reef-62489.herokuapp.com
```

## Available Scripts

In the project directory, you can run:

- `npm start`
- `npm test`
- `npm run build`
- `npm run eject`
